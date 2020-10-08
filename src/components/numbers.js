import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// here useState is to change the state
// and useEffect is to take a effect

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one','two','three'])
    const [letters, setLetters] = useState(['a','b','c'])
    const addNumber = () => {
        setNumbers([...numbers,'four','five']);
    }

    const addLetter = () => {
        setLetters([...letters,'d','e'])
    }

    useEffect( () => {
        console.log('our use effect trial triggers');
    },[numbers,letters])

    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(num => {
                return (
                    <div key={num}>
                        <h4>{num}</h4>
                    </div>
                )
            })}
            <button onClick={addNumber} className="btn btn-success shadow-none">Add Number</button>
            {letters.map(letter => {
                return (
                    <div key={letter}>
                        <h4>{letter}</h4>
                    </div>
                )
            })}
            <button onClick={addLetter} className="btn btn-primary-outline shadow-none">Add Letter</button>
        </div>
    );
}

export default Numbers;
// this is all about hooks