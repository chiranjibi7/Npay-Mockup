import React from 'react';
import "./cardfield.css";
import Topbar from '../../shared/ui/Topbar';
import { ImgHeader, CardInput, EligibleBanks, ButtonGroup } from '../../components/CardFieldInformation';

function CardFieldInformation() {
  return (
    <main className='cardfield'>
        <Topbar icon={true} text="Card Information"/>
        <ImgHeader/>
        <CardInput/>
        <EligibleBanks/>
        <ButtonGroup/>
    </main>
  )
}

export default CardFieldInformation