import React from 'react';
import VisaDirect from "../../images/VISADIRECT.jpg";
import Tick from "../../images/Fill 12.jpg";

function ImgHeader() {
  return (
   <>
        <div className='visa-icon'>
            <img src={VisaDirect} width={60} height={60}/>
            <img src={Tick} className='tick'/>
        </div>
        <p className='success-title'>Successful Transaction</p>
        <p className='success-text'>Your Visa Direct transaction has been successfully completed.</p>
   </>
  )
}

export default ImgHeader