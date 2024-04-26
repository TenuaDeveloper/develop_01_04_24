import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = <h1 className='head' tabIndex='5'>Namaste using JSX </h1>;

const HeadinComponent  = () => (<div><h1 className='heading'> Namaste REact Functional Component {Title}</h1></div>);

const root =  ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(<HeadinComponent/>);
    