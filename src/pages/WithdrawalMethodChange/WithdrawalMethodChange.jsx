import React from 'react';
import Topbar from '../../shared/ui/Topbar';
import "./withdrawalchange.css";
import Information from "../../images/Infomation.jpg";
import Interac from "../../images/Interact.jpg";
import VisaDirect from "../../images/Visa-Direct.png";
import VisaD from "../../images/VD.png";
import DirectDeposit from "../../images/Direct-Deposit.png";
import Fill from "../../images/Fill 5.jpg";

export default function WithdrawalMethodChange() {
  return (
    <div className='withdrawal-change'>
        <Topbar icon={true} text="Withdrawal Method"/>
        <p className='balance-text'>How would you like us to transfer your money?</p>
        <div className='funds'>
            <p>Preffered Method</p>
            <img src={Information} height={20} width={20}/>
        </div>
        <div className='list'>
        <div className='bank-b' style={{backgroundColor:"#FFFFFF"}}>
                <img className='logo' src={Interac} height={33} width={33} />
                <div className='text-wrapper'>
                    <p className='text-bank'>Interac eTransfer</p>
                    <p className='text-free-change'>john@payper.com</p>
                </div>
                <p className='change-text'>Change</p>
            </div>

            <div className='bank-b' style={{backgroundColor:"#4985FE4D"}}>
                <img className='logo' src={VisaDirect} height={33} width={33} />
                <div className='text-wrapper'>
                    <p className='text-bank'>Visa Direct</p>
                    <p className='text-free-change'>John Doe 4021</p>
                </div>
                <p className='change-text'>Change</p>
            </div>

            <div className='bank-b' style={{backgroundColor:"#979797"}}>
                <img className='logo' src={VisaD} height={33} width={33} />
                <div className='text-wrapper'>
                    <p className='text-bank'>Visa Direct</p>
                    <p className='text-free-change'>John Doe 65821</p>
                </div>
                <p className='change-text'>Change</p>
            </div>
        </div>

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

        <div className='btn-wrapper' style={{marginTop:"30px"}}>
            <div className='btn-primary'>
                <p className='btn-continue'>CONTINUE</p>
            </div>
        </div>

        <div className='btn-secondary'>
            <p className='btn-cancel'>CANCEL</p>
        </div>
    </div>
  )
}
