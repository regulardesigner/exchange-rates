import React from 'react';

import './App.scss';

import Tips from './components/Tips/';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      fetchError: false,
      rates: null,
      currencies: {
        base: 'USD',
        selected: 'EUR',
      },
      exchange: {
        base: 1,
        selected: null,
      },
      language: 'us',
      i18n: {
        title: {
          us: 'Tips calculator',
          es: 'Calculadora de propinas',
          fr: 'Calcul de pourboires',
        },
        update: {
          us: 'Exchange rates updated',
          es: 'Actualizaciones de tasas de cambio',
          fr: 'Mis à jour du taux de change',
        } 
      }
    };
  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then((respond) => respond.json())
    .catch((error) => {
      console.error(error);
      this.setState({
        fetchError: true,
      })
    })
    .then((data) => {
      this.setState({
        isLoading: false,
        rates: data,
        date: data.date,
        exchange: {
          base: 1,
          selected: data.rates.EUR,
        }
      })
    });
  }

  // handle controled fields
  handleChange = event => {
    const { exchange } = { ...this.state };
    const { name, value } = event.target;
    exchange[name] = value;
    this.setState({ exchange });
  }

  handleCurrencyChange = event => {
    // get the event target value
    const { name, value } = event.target;

    if(name === "base") {
      // 1. user see that the app is fetching new rates data
      this.setState({ isLoading: true })
      // 2. fetching the data based on the new currency base
      fetch(`https://api.exchangeratesapi.io/latest?base=${value}`)
      .then((respond) => respond.json())
      .catch((error) => {
        console.error(error);
        this.setState({
          fetchError: true,
        })
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          rates: data,
          date: data.date,
          exchange: {
            base: 1,
            selected: data.rates[value],
          },
          currencies: {
            base: value,
            selected: value,
          }
        })
      });
    } else {
      // get the current state
      const { currencies } = { ...this.state };
      const { exchange } = { ...this.state };
      // change the state copy
      currencies[name] = value;
      exchange['selected'] = this.state.rates.rates[value];
      // push to the state the changes
      this.setState({ currencies, exchange });
    }
  }

  screen() {
    const { base, selected } = this.state.exchange;
    const date = this.state.date;
    const { i18n } = this.state;
    const { language } = this.state;
    //const { base, selected } = this.state.currencies;
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Exchange rates</h1>
        </header>
        <section>
        <div className="app-exchange">
            <div className="input from">
              <input className="input-item" type="number" name="base" value={base} onChange={this.handleChange}/>
              <select
                name="base"
                onChange={this.handleCurrencyChange}
                value={this.state.currencies.base}
              >
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="input to">
              <input disabled className="input-item" type="number" name="selected" value={(base*selected).toFixed(2)}/>
              <select
                name="selected"
                onChange={this.handleCurrencyChange}
                value={this.state.currencies.selected}
              >
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </section>
        <Tips result={base} currency={this.state.currencies.base} title={i18n.title[language]} />
      <footer style={{
        fontSize: '1em',
        textAlign: 'center',
        marginTop: '1.6em',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#222525'
      }}>{i18n.update[language]}: {date}</footer>
      </div>
    )
  }

  loading() {
    return (
      <div className="app-load">
        Fetching rates datas
      </div>
    )
  }

  error() {
    return (
      <div className="app-error">
        <h1>FETCH ERROR</h1>
        <p>Take a look at the console.log error...</p>
      </div>
    )
  }

  render () {
    const { isLoading } = this.state;
    const { fetchError } = this.state;
    return (
      <div className="app">
        { fetchError && this.error() }
        { isLoading && this.loading() }
        { isLoading || this.screen() }
      </div>
    );
  }
}

export default App;
