import React from "react";

function Detail() {
  return (
    <section className="detail">
      <div className="amount">
        <p className="detail-key">Amount Withdrawn:</p>
        <p className="detail-value">$ 3,000</p>
      </div>
      <div className="code">
        <p className="detail-key">Confirmation code:</p>
        <p className="detail-value">2784100995</p>
      </div>

      <p className="info-text">
        You will see a credit of $3,000.00 from <span>"Payper Inc."</span> on
        your statement for your card ending in 1567.
      </p>
    </section>
  );
}

export default Detail;
