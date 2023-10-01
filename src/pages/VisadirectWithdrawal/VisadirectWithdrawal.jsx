import React from 'react';
import "./visadirect.css";
import Topbar from '../../shared/ui/Topbar';
import VisaDirect from "../../images/VISADIRECT.jpg";
import Tick from "../../images/Fill 12.jpg";

export default function VisadirectWithdrawal() {
  return (
    <div className='visadirect'>
        <Topbar icon={false} text="Visa Direct Withdrawal"/>
        <div className='visa-icon'>
            <img src={VisaDirect} width={60} height={60}/>
            <img src={Tick} className='tick'/>
        </div>
        <p className='success-title'>Successful Transaction</p>
        <p className='success-text'>Your Visa Direct transaction has been successfully completed.</p>
        <div className='detail'>
            <div className='amount'>
                <p className='detail-key'>Amount Withdrawn:</p>
                <p className='detail-value'>$ 3,000</p>
            </div>
            <div className='code'>
                <p className='detail-key'>Confirmation code:</p>
                <p className='detail-value'>2784100995</p>
            </div>

            <p className='info-text'>You will see a credit of $3,000.00 from <span>"Payper Inc."</span> on your statement for your card ending in 1567.</p>
        </div>
        <div className='btn-wrapper' style={{marginTop:"148px"}}>
            <div className='btn-primary'>
                <p className='btn-continue'>CONTINUE</p>
            </div>
        </div>
    </div>
  )
}
