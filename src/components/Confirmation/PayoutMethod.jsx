import React from 'react';
import Switch from "../../images/switch.jpg";

function PayoutMethod() {
  return (
    <section className="payout-method">
    <p>Preffered payout method</p>
    <img src={Switch} />
  </section>
  )
}

export default PayoutMethod