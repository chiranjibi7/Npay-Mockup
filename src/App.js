import { WithdrawalMethod, CardFieldInformation, CardExpiryInformation, VisadirectWithdrawal, CardErrorModal, WithdrawalMethodChange } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
       <CardErrorModal/>
       <WithdrawalMethod/>
       <CardFieldInformation/>
       <CardExpiryInformation/>
       <VisadirectWithdrawal/>
       <WithdrawalMethodChange />
    </div>
  );
}

export default App;
