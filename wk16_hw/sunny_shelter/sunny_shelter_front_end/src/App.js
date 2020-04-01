import React from 'react';
import logo from './logo.svg';
import './App.css';

console.log('current base URL:', baseURL)

fetch(baseURL + "/animals")
  .then(
    data => {
      return data.json();
    },
    err => console.log(err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log(err)
  );

class App extends React.Component {
  // store the data made via fetch
  state = {
    animals: [],
    animal: null
  }




render () {
  return (
    <div className='container'>
     <h1>ANIMALS</h1>
    </div>
  )
}

  
}

export default App;
