import React, { useState } from 'react';
import './App.css';

export default () => {

  interface IResult {
    x1: number;
    x2: number;

    result: number;
  }

  class Result implements IResult {
    x1: number;
    x2: number;
    result: number;

    constructor(x1: number, x2: number, result: number) {
      this.x1 = x1;
      this.x2 = x2;

      this.result = result;
    }

  }

  const [results, setResults] = useState<Result[]>([])

  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    let x1 = parseInt(firstValue);
    let x2 = parseInt(secondValue);
    let randonValue = Math.floor(Math.random() * (x1 - x2 + 1) + x2);

    let newResult: Result = new Result(x1, x2, randonValue);
    setResults([...results, newResult])
  }

  const [firstValue, setFirstValue] = useState<string>("")
  const [secondValue, setSecondValue] = useState<string>("")

  return (
    <div className="container">
      <div className='titlePanel'>
        <h2>Random number between two values generator</h2>
        <div className='lineSeparator' />
      </div>
      <div className='leftPanel'>
        <div className='fields'>
          <form onSubmit={handleSubmit}>
            <input className='fieldItem' placeholder="First value" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} />
            <input className='fieldItem' placeholder='Second value' value={secondValue} onChange={(e) => setSecondValue(e.target.value)}></input>
            <button className='fieldItem' id='calculteValueButton'>Calculate random value</button>
          </form>
        </div>
      </div>

      <div className='rightPanel'>
        <div className='history'>
          <div className='title'>
            <h3>Last values calculated</h3>
          </div>
          <div className='lineSeparator' />
          <div className='results'>
            <ul>
              {results.map(value =>
                <li>First value: {value.x1} Second value: {value.x2} {"->"} Result: {value.result}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}