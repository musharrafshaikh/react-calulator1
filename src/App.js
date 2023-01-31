import React, { useState } from 'react'

function App() {

    const [result, setResult] = useState("");

    //handleClick function
    const handleClick = (e) => {
        //if equal to then we have to eval
        if (e.target.innerText == '=') {
            try {
                let res = eval(result).toString();
                setResult(res);
            } catch (err) {
                alert("invalid input")
                setResult('');
            }
            // if clicked on clear button then clear the input
        } else if (e.target.innerText == 'Clear') {
            setResult('');
            //backspace the last input
        } else if (e.target.innerText == 'Del') {
            setResult(result.slice(0, -1));
        } else {
            if (e.target.innerText == 'x') {
                setResult(result + '*');
            } else {
                setResult(result + e.target.innerText);
            }
        }
    }

    return (
        <div className='main d-flex flex-column '>
            <div className='display'>{result}
            </div>
            <div className='r d-flex justify-content-around mt-1'>
                <button className='btn-ext hlt' onClick={(e) => handleClick(e)}>Clear</button>
                <button className='hlt' onClick={(e) => handleClick(e)}>Del</button>
                <button className='hlt' onClick={(e) => handleClick(e)}>/</button>
            </div>
            <div className='r d-flex justify-content-around mt-1'>
                <button onClick={(e) => handleClick(e)}>1</button>
                <button onClick={(e) => handleClick(e)}>2</button>
                <button onClick={(e) => handleClick(e)}>3</button>
                <button className='hlt' onClick={(e) => handleClick(e)}>x</button>
            </div>
            <div className='r d-flex justify-content-around mt-1'>
                <button onClick={(e) => handleClick(e)}>4</button>
                <button onClick={(e) => handleClick(e)}>5</button>
                <button onClick={(e) => handleClick(e)}>6</button>
                <button onClick={(e) => handleClick(e)} className='hlt'>+</button>
            </div>
            <div className='r d-flex justify-content-around mt-1'>
                <button onClick={(e) => handleClick(e)}>7</button>
                <button onClick={(e) => handleClick(e)}>8</button>
                <button onClick={(e) => handleClick(e)}>9</button>
                <button className='hlt' onClick={(e) => handleClick(e)}>-</button>
            </div>
            <div className='r d-flex justify-content-around mt-1'>
                <button className='' onClick={(e) => handleClick(e)}>0</button>
                <button className='hlt' onClick={(e) => handleClick(e)}>.</button>
                <button className='hlt btn-ext' onClick={(e) => handleClick(e)}>=</button>
            </div>
        </div>
    )
}

export default App;