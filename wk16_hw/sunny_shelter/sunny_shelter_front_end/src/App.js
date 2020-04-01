import React from 'react';
import NewForm from './components/NewForm'
import Show from './components/Show.js'
let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3005'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

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
    animals: []
  }
  getAnimals = () => {
    fetch(baseURL+ '/animals')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => console.log(parsedData),
       err=> console.log(err))
  }




render () {
  return (
    <div className='container'>
     <h1>ANIMALS</h1>
     <NewForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal} />
          <table>
            {/* Conditional logic option 1 */}
            {/* show the active holiday */}
            {/* {this.state.holiday
          ? <Show holiday={this.state.holiday} />
          : null } */}
            {/* Conditional logic option 2 */}
            {this.state.animal && <Show animal={this.state.holiday} />}
  
            <tbody>
              {this.state.animals.map(animal => (
                <tr
                  key={animal._id}
                  onMouseOver={() => this.getAnimal(animal)}
                >
                  <td>{animal.name}</td>
                  <td>{animal.likes}</td>
                  <td onClick={() => this.deleteAnimal(animal._id)}>X</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}
componentDidMount() {
  this.getAnimals();
}
}

  

export default App;
