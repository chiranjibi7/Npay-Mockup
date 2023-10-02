import React from 'react';
import Visa from "../../images/Visa.jpg";

function VisaExpiry() {
  return (
    <>  
        <div className='visa-content'>
            <img src={Visa} height={21} width={53} />
            <p className='visa-num'>4521  5485  4574  2010</p>
            <p className='visa-text'>Instant</p>
        </div>

        <div className='visa-expiry'>
            <input type="text" value="Expiry"/>
        </div>
    </>
  )
}

export default VisaExpiry