import React from 'react';

function FunctionalClick(){
    function ClickHandler(){
        return console.log('Button Clicked');
    }
    return(<div><button onClick={ClickHandler}>Click</button></div>)
}
export default FunctionalClick