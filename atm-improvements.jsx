const ATMDeposit = ({ onChange, isDeposit, validChoice, isValid, setNumber}) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  console.log(`ATM isValid: ${isValid}`);
  return (
    <label className="label huge">
      {validChoice && <div>
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={isValid} width="200" value="Submit" id="submit-input"></input>
        <Keypad setNumber={setNumber} isValid={isValid}></Keypad>
      </div>}
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(0);
  const [atmMode, setAtmMode] = React.useState("");
  const [validChoice, setValidChoice] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [num, setNum] = React.useState("");

  const setNumber = (keyOption) => {
    let newNum = num;
    if (keyOption === 'del') {setNum(0)}
    else{
        setNum(newNum + keyOption)
    }
  }

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  console.log(`is this a valid transaction: ${validTransaction}`);

  const handleChange = (event) => {
    if(Number(event.target.value) <= 0) {return}
    else{
      if(atmMode=="Cash Back" && Number(event.target.value)>totalState){
        setValidTransaction(false)
      } else {
        setValidTransaction(true);
        console.log(`handleChange ${event.target.value}`);
        setDeposit(Number(event.target.value));
      }
    }
    
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    //setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = () =>{
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
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2><label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
      <option id="no-selection" value=""></option>
      <option id="deposit-selection" value="Deposit">Deposit</option>
      <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      <ATMDeposit onChange={handleChange} setNumber={setNumber} isDeposit={isDeposit} validChoice = {validChoice} isValid = {!validTransaction}></ATMDeposit>
      <div>Amount: {num}</div>
     
    </form>
    
    
  );
};
// ========================================

ReactDOM.render(<Account />, document.getElementById('root'));
