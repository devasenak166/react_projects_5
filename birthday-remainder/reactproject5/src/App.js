import React, { useState } from 'react';
import data from './components/data';
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (number <= 0) {
      amount = 1;
    }
    if (number > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
   <>
<div className="container">
    <div className="row g-3 d-flex justify-content-center mt-5">
        <div className="col-auto">
            <h2 style={{letterSpacing:"3px"}}>TIRED OF BORING LOREM IPSUM?</h2>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="row g-3 d-flex justify-content-center mt-3">
    
        <div className="col-auto">
       
          <label htmlFor="paragraphs" className="col-form-label" style={{letterSpacing:"3px"}}>Paragraphs : </label>
        </div>
        <div className="col-auto">
          <input type="number" id="paragraphs" className="form-control" aria-labelledby="paragraphs"  value={number}
          onChange={(e) =>  setNumber(e.target.value)}/>
        </div>
        <div className="col-auto">
            <button type="submit" id="generate" className="btn btn-primary" >Generate</button>
        </div>
       
    </div>
    </form>
    <div className="row g-3 d-flex justify-content-center mt-3">
         <div id="result" className="col-6 text-center">
         {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
         </div>
    </div>
    
    </div>


   </>
  );
}

export default App;
