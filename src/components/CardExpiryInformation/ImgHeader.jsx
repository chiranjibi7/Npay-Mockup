import React from 'react';
import VisaDirect from "../../images/VISADIRECT.jpg";

function ImgHeader() {
  return (
    <>
         <div className='visa-img'>
            <img src={VisaDirect} width={60} height={60}/>
        </div>
        <p className='wallet-text'>Please enter your card number.</p>
    </>
  )
}

export default ImgHeader