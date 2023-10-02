import React from 'react';
import Information from "../../images/Infomation.jpg";
import DirectDeposit from "../../images/Direct-Deposit.png";

function OtherMethod() {
  return (
    <>
        <div className='funds' style={{marginTop:"72px"}}>
            <p>Other Methods</p>
            <img src={Information} height={20} width={20}/>
        </div>

        <div className='bank-c' style={{width:"343px",marginLeft:"16px",marginRight:"16px"}}>
                <img className='logo' src={DirectDeposit} height={33} width={33} />
                <div className='text-wrapper'>
                    <p className='text-bank'>Direct Deposit</p>
                    <p className='text-free'>Withdraw directly to your bank account.</p>
                </div>
        </div>
    </>
  )
}

export default OtherMethod