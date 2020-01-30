import React from 'react';

import './tips.scss';

const Tips = ({ result, currency }) => {
  const ten = (result * 0.10).toFixed(2);
  const fiftheen = (result * 0.15).toFixed(2);
  const twenty = (result * 0.2).toFixed(2);
  return (
    <section className="tips">
      <h2 style={{ textAlign: "center", marginTop: "2em" }}>Tips calculator</h2>
      <div className="tips-boxes">
        <div className="tips-boxes-10">
          <span className="emo" role="img" aria-label="Neutral face">😐</span>
          {ten} {currency}
        </div>
        <div className="tips-boxes-15">
          <span className="emo" role="img" aria-label="Slightly smiling face">🙂</span>
          {fiftheen} {currency}
        </div>
        <div className="tips-boxes-20">
          <span className="emo" role="img" aria-label="Grinning face">😃</span>
          {twenty} {currency}
        </div>
      </div>
    </section>
  )
}

export default Tips;
