import React from 'react';
import Interac from "../../images/Interact.jpg";
import VisaDirect from "../../images/Visa-Direct.png";
import DirectDeposit from "../../images/Direct-Deposit.png";
import Fill from "../../images/Fill 5.jpg";

export default function MethodList() {
  return (
    <section className='list'>
    <div className='bank-a'>
        <img className='logo' src={Interac} height={33} width={33} />
        <div className='text-wrapper'>
            <p className='text-bank'>Interac eTransfer</p>
            <p className='text-free'>Withdraw and receive an interac eTransfer.</p>
        </div>
    </div>

    <div className='bank-b'>
        <img className='logo' src={VisaDirect} height={33} width={33} />
        <div className='text-wrapper'>
            <p className='text-bank'>Visa Direct</p>
            <p className='text-free'>Withdraw directly to Visa card.</p>
        </div>
        <img className='fill' src={Fill} height={10.45} width={13.75}/>
    </div>

    <div className='bank-c'>
        <img className='logo' src={DirectDeposit} height={33} width={33} />
        <div className='text-wrapper'>
            <p className='text-bank'>Direct Deposit</p>
            <p className='text-free'>Withdraw directly to your bank account.</p>
        </div>
    </div>
</section>
  )
}
