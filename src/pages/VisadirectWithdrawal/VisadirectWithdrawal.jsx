import React from 'react';
import "./visadirect.css";
import Topbar from '../../shared/ui/Topbar';
import { ImgHeader, Detail, ButtonGroup } from '../../components/VisadirectWithdrawal';

export default function VisadirectWithdrawal() {
  return (
    <main className='visadirect'>
        <Topbar icon={false} text="Visa Direct Withdrawal"/>
        <ImgHeader/>
        <Detail/>
        <ButtonGroup/>
    </main>
  )
}
