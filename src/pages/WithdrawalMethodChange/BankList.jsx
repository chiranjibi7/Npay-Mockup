import React from 'react';
import Interac from "../../images/Interact.jpg";
import VisaDirect from "../../images/Visa-Direct.png";
import VisaD from "../../images/VD.png";

function BankList() {
  return (
    <section className='list'>
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
    </section>
  )
}

export default BankList