import React,{useRef,useEffect} from 'react';
import "./carderror.css";
import Topbar from '../../shared/ui/Topbar';
import VisaDirect from "../../images/VISADIRECT.jpg";
import Loader from "../../images/Loader anim.jpg";
import Cibc from "../../images/CIBC 1.jpg";
import Hsbc from "../../images/HSBC.jpg";
import National from "../../images/National.jpg";
import Tangerine from "../../images/Tangerine.jpg";

function CardErrorModal() {
    const errorModalRef=useRef();
    useEffect(()=>{
        errorModalRef.current.showModal();
    })
  return (
    <div className='errormodal'>
        <Topbar icon={true} text="Card Information"/>
        <div className='visa-img-error'>
            <img src={VisaDirect} width={60} height={60}/>
        </div>
        <p className='wallet-text-error'>Please enter your card number.</p>
        <div className='field-wrapper-error'>
            <input value='4521 5485 4574 2010'/>
            <img src={Loader} height={24} width={24} />
        </div>
        <div className='eligible-banks-error'>
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

        <dialog ref={errorModalRef}>
            <p className='error-title'>Card not enabled for Visa Direct</p>
            <p className='error-text'>Your Visa branded card is not enabled for this payout method. Please try entering a new card number or select a different payout option.</p>

            <div className='btn-primary-error'>
                <p className='btn-continue-error'>OK</p>
            </div>
        </dialog>
    </div>
  )
}

export default CardErrorModal