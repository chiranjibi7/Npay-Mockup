import React from 'react';
import Loader from "../../images/Loader anim.jpg";

function CardInput() {
  return (
    <section className='field-wrapper'>
    <input value='4521 5485 4574 2010'/>
    <img src={Loader} height={24} width={24} />
    </section>
  )
}

export default CardInput