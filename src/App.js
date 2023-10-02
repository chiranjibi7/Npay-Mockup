import { WithdrawalMethod, CardFieldInformation, CardExpiryInformation, VisadirectWithdrawal, CardErrorModal, WithdrawalMethodChange,Confirmation } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
       {/* <CardErrorModal/>
       <WithdrawalMethod/>
       <CardFieldInformation/>
       <CardExpiryInformation/>
       <VisadirectWithdrawal/>
       <WithdrawalMethodChange/> */}
       <Confirmation/>
    </div>
  );
}

export default App;
