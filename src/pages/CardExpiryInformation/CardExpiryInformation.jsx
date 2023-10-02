import React from 'react';
import "./cardexpiry.css";
import { ImgHeader, UserInfo, VisaExpiry, EligibleBanks, ButtonGroup } from '../../components/CardExpiryInformation';
import Topbar from "../../shared/ui/Topbar";

function CardExpiryInformation() {
  return (
    <main className='cardexpiry'>
        <Topbar icon={true} text="Card Information" />
        <ImgHeader/>
        <UserInfo/>
        <VisaExpiry/>
        <EligibleBanks/>
        <ButtonGroup/>
    </main>
  )
}

export default CardExpiryInformation