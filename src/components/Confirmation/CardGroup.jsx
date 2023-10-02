import React from 'react';
import Visa from "../../images/visa-card.jpg";

function CardGroup() {
  return (
    <section className="card-group">
    <img
      src={Visa}
      width={258}
      height={163}
      className="visa-card-hidden1"
    />
    <img src={Visa} width={258} height={163} className="visa-card" />
    <img
      src={Visa}
      width={258}
      height={163}
      className="visa-card-hidden2"
    />
  </section>
  )
}

export default CardGroup