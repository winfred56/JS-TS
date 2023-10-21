/// Using the javascript syntax for creating a function
// function Hello (){
//     return <h1>Hello World</h1>
// }

/// Using ES6 syntax for creating a function
name = 'Winfred'
const displayName = ()=>'Winfred is learning react'
const Hello = () => <h1>Hello World! {displayName()}</h1>;

export default Hello;