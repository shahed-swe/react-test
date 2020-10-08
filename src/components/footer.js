import React from 'react';

function Footer(props){
    return (
        <React.Fragment>
            <h1>This is our {props.info}</h1>
    <h2>{props.take}</h2>
        </React.Fragment>
    )
}

export default Footer;