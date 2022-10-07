const Keypad = () => {
  //const [value, setValue] = React.useState("");
  const [num, setNum] = React.useState("");
//ejemplo de react function
 // setNumber(...number + value);
  /// KEYPAD
  const Square = ({keyOption}) => {
   let newNum = num;
         return (
        <button className="square" onClick={() => {
            if (keyOption === 'del') {setNum(0)}
            else{
              //setValue(keyOption);
              setNum(newNum + keyOption)
            }
          }
        } >
          {keyOption}
        </button>
      );
    
  }
  
    const Board = () => {
   
      const renderSquare = (i) => {
        return <Square keyOption={i}/>;
      }
      //const status = `Pressed Key: ${value}` ;
      const currentNum = `Pressed Key: ${Number(num)}` ;
  
      return (
        <div>
          {/* <div className="status">{status}</div> */}
          <div className="status">{currentNum}</div>

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

ReactDOM.render(<Keypad />, document.getElementById('root'));
