const Keypad = ({newDepo}) => {
  //const [value, setValue] = React.useState("");
//ejemplo de react function
 // newDeposit(...number + value);
  /// KEYPAD
  const Square = ({keyOption}) => {
   
    return (
        <button className="square" onClick={() => passKey(keyOption)}>
            {keyOption}
        </button>
      );
  }
  
  const passKey = (key) =>{
    newDepo(key);
  }

    const Board = () => {
         const renderSquare = (i) => {
        return <Square keyOption={i}/>;
      }
   
      return (
        <div>
      
          <div className="board-row">
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
          </div>
          <div className="board-row">
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
          </div>
          <div className="board-row">
            {renderSquare(7)}
            {renderSquare(8)}
            {renderSquare(9)}
          </div>
          <div className="board-row">
            {renderSquare('del')}
            {renderSquare(0)}
            {renderSquare('00')}
          </div>
          
        </div>
      );
    
  }
  

  // Aqui estamos dibujando un keypad
      return (
        <div className="keypad">
          <div className="keypad-board">            
            <Board />
          </div>
          <div className="keypad-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    
};
// ========================================
