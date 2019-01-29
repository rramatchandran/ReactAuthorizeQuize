import React from "react"
import ReactDOM from 'react-dom'

function Clicker ({handleClick}) {
    return <div>
      <button onClick={(e) => {handleClick('A'); }} >A</button>
      <button onClick={(e) => {handleClick('B'); }} >B</button>
      <button onClick={(e) => {handleClick('C'); }} >C</button>
      
    </div>
  }

  ReactDOM.render(<Clicker handleClick={(letter)  => {console.log('${letter} clicked') }} />, document.getElementById('root')
  );

  export default Clicker;