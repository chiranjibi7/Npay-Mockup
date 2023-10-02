import React from 'react';
import Topbar from '../../shared/ui/Topbar';
import "./withdrawalchange.css";
import { MethodHeader, BankList, OtherMethod, ButtonGroup } from '../../components/WithdrawalMethodChange';

export default function WithdrawalMethodChange() {
  return (
    <main className='withdrawal-change'>
        <Topbar icon={true} text="Withdrawal Method"/>
        <MethodHeader/>
        <BankList/>
        <OtherMethod/>
        <ButtonGroup/>
    </main>
  )
}
