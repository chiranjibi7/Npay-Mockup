import React from 'react';
import Topbar from '../../shared/ui/Topbar';
import "./withdrawalmethod.css";
import { PaymentMethod, MethodList, ButtonGroup} from '../../components/WithdrawalMethod';

function WithdrawalMethod() {
  return (
    <main className='withdrawal-method'>
        <Topbar icon={true} text="Withdrawal Method"/>
        
        <p className='balance-text'>How would you like us to transfer your money?</p>
        <PaymentMethod/>
        <MethodList/>
        <ButtonGroup/>
    </main>
  )
}

export default WithdrawalMethod