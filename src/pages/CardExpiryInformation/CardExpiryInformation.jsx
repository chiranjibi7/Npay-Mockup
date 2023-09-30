import React from 'react';
import "./cardexpiry.css";
import Topbar from "../../shared/ui/Topbar";
import VisaDirect from "../../images/VISADIRECT.jpg";
import Edit from "../../images/Edit.jpg";
import Visa from "../../images/Visa.jpg";
import Cibc from "../../images/CIBC 1.jpg";
import Hsbc from "../../images/HSBC.jpg";
import National from "../../images/National.jpg";
import Tangerine from "../../images/Tangerine.jpg";

function CardExpiryInformation() {
  return (
    <div className='cardexpiry'>
        <Topbar icon={true} text="Card Information" />
        <div className='visa-img'>
            <img src={VisaDirect} width={60} height={60}/>
        </div>
        <p className='wallet-text'>Please enter your card number.</p>

        <div className='user-info'>
            <img src={Edit} height={14} width={14} /> 
            <div className='user-name'>
                <p className='userinfo-key'>Card Holder Name</p>
                <p className='userinfo-value'>Peter Pan</p>
            </div>
            <div className='user-phone'>
                <p className='userinfo-key'>Phone Number</p>
                <p className='userinfo-value'>+1 (647) 658-9841</p>
            </div>
            <div className='user-address'>
                <p className='userinfo-key'>Address</p>
                <p className='userinfo-value'>379 Deerfield Ave. Toronto,ON,M4H2B2</p>
            </div>
        </div>

        <div className='visa-content'>
            <img src={Visa} height={21} width={53} />
            <p className='visa-num'>4521  5485  4574  2010</p>
            <p className='visa-text'>Instant</p>
        </div>

        <div className='visa-expiry'>
            <input type="text" value="Expiry"/>
        </div>

        <div className='eligible-banks' style={{marginTop:0,marginLeft:"25px"}}>
            <p>Eligible Banks</p>
            <img src={Cibc} height={17} width={17} />
            <img src={Hsbc} height={17} width={17} />
            <img src={National} height={17} width={17} />
            <img src={Tangerine} height={17} width={17} />
        </div>

        <div className='btn-wrapper' style={{marginTop:"140px"}}>
            <div className='btn-primary'>
                <p className='btn-continue'>CONTINUE</p>
            </div>
        </div>
    </div>
  )
}

export default CardExpiryInformation