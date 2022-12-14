const Account = () => {
  const [deposit, setDeposit] = React.useState('');
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(0);
  const [atmMode, setAtmMode] = React.useState("");
  const [validChoice, setValidChoice] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [conMessage, setConMessage] = React.useState('Select an action below to continue');
  const [consoleClass, setConsoleClass] = React.useState('console-normal');
  console.log('valid transaction:'+ validTransaction);
  let message = [
    'Select an action below to continue',
    'Introduce amount using keypad',
    `invalid transaction, don't have enough funds, delete and try again`
    ];
 let consoleStatus = ['console-normal','console-error'];
 console.log('rendering');
 let status = `Account Balance $ ${totalState} `;

 // this function validate if this is a valid transaction, and sets value of valid transaction
 // it sets messages in cosole.
    function validateDeposit (newAmount){
      setValidTransaction(false);    
      if(atmMode=="Cash Back" && newAmount > totalState) {
        setValidTransaction(false);
        setConMessage(message[2]);
        setConsoleClass(consoleStatus[1]);     
      }      
      else {
        setValidTransaction(true);
        setConMessage(message[1]);
        setConsoleClass(consoleStatus[0]); 
        console.log('validTransaction:'+validTransaction)
      }
    }
//this function us called each time user press a key, check if it is a valid deposit, and update deposit value.

   const newDeposit = (keyOption) => {
        
      let newAmount = deposit;
      console.log('keyOption:' + keyOption);
      if (keyOption === 'del') setDeposit(0)
      else{
        newAmount= `${newAmount}${keyOption}`;
        validateDeposit(Number(newAmount));
        setDeposit(Number(newAmount));             
      }
    }

   
// here update totalState (account Balance) using Deposit actual value  
    // if isDeposit true, then its a deposit, if false its a withdraw (cash back)
  const handleSubmit = () => {
    console.log('handleSubmit');
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setDeposit(0);
    //setValidTransaction(false);
    event.preventDefault();
  };

  // this function change value of isDeposit, acoording to user choice
  // also update the value of validChoice, this binary variable will be used to control the first printing of HMI
  const handleModeSelect = (event) =>{
    console.log('handle mode select');
    setAtmMode(event.target.value);
    setValidChoice(true);
     switch(event.target.value) {
      case "Deposit" : setIsDeposit(true); 
        break;
      case "Cash Back" : setIsDeposit(false);
        break;
      case "": return; 
    }
  };

  
   return (
    <div >
      <h2 id="total">{status}</h2>
      <div className={consoleClass}>{conMessage}</div>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>

      { validChoice && < div>
        <div className="amount">Amount: {deposit}</div>
        <Keypad newDepo={newDeposit}></Keypad>
        <button onClick={handleSubmit} disabled={!validTransaction}>ENTER</button>
      </div>}
    </div>
    
    
  );
};
// ========================================

ReactDOM.render(<Account />, document.getElementById('root'));
