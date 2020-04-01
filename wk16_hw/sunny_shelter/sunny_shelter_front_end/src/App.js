import React from 'react';
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
import NewForm from './components/NewForm'
import Show from './components/Show.js'


let baseURL = process.env.REACT_APP_BASEURL

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
    animals: [],
    animal: null
  }

getAnimal = (animal) => {
  this.setState({animal: animal})
}


  getAnimals = () => {
    fetch(baseURL+ '/animals')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => console.log(parsedData),
       err=> console.log(err))
  }

  handleAddAnimal = (animal) => {
    const copyAnimals = [...this.state.animals]
    copyAnimals.unshift(animal)
    this.setState({
      animals: copyAnimals,
      name: ''
    })
  }

  deleteAnimal = id => {
    fetch(baseURL + '/animals/' + id, {
      method:'DELETE'
    }).then( res => {
      // holidaysArr = [{}, {}]
      const animalsArr = this.state.animals.filter( animal => {
        return animal._id !== id
      })
      this.setState({animals: animalsArr})
    })
  }




render () {
  console.log("App - render() - state", this.state);
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
            {this.state.animal && <Show animal={this.state.animal} />}
  
            <tbody>
              {this.state.animals.map(animal => (
                <tr
                  key={animal._id}
                  onMouseOver={() => this.getAnimal(animal)}
                >
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.breed}</td>
                  <td>{animal.image}</td>
                  <td>{animal.age}</td>
                  <td>{animal.adopted}</td>
                  <td>{animal.personalityTraits}</td>
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
