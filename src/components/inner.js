import React from 'react';



const new_animal = ['elephant','horse','tiger','dog']

function Inner(){
    return(
        <React.Fragment>
            {new_animal.map(animal => {
                return (
                    <div key={animal}>
                        <h1>{animal}</h1>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default Inner;