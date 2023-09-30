import React from 'react';
import "./cardfield.css";
import Topbar from '../../shared/ui/Topbar';
import VisaDirect from "../../images/VISADIRECT.jpg";
import Loader from "../../images/Loader anim.jpg";
import Cibc from "../../images/CIBC 1.jpg";
import Hsbc from "../../images/HSBC.jpg";
import National from "../../images/National.jpg";
import Tangerine from "../../images/Tangerine.jpg";

function CardFieldInformation() {
  return (
    <div className='cardfield'>
        <Topbar icon={true} text="Card Information"/>
        <div className='visa-img'>
            <img src={VisaDirect} width={60} height={60}/>
        </div>
        <p className='wallet-text'>Please enter your card number.</p>
        <div className='field-wrapper'>
            <input value='4521 5485 4574 2010'/>
            <img src={Loader} height={24} width={24} />
        </div>
        <div className='eligible-banks'>
            <p>Eligible Banks</p>
            <img src={Cibc} height={17} width={17} />
            <img src={Hsbc} height={17} width={17} />
            <img src={National} height={17} width={17} />
            <img src={Tangerine} height={17} width={17} />
        </div>
        <div className='btn-wrapper' style={{marginTop:"139px"}}>
            <div className='btn-primary'>
                <p className='btn-continue'>CONTINUE</p>
            </div>
        </div>
    </div>
  )
}

export default CardFieldInformation