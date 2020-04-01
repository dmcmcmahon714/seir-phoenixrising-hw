import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <>
        <div className="details">
         <h3>Animal info:</h3>
         <hr/>
         <h4> { this.props.animal.name } </h4>
         <h6><span>Species:</span> {this.props.animal.species}</h6>
         <p><span>Description:</span> { this.props.animal.description } </p>
         <p><span>Breed:</span> { this.props.animal.breed} </p>
         <p><span>Image:</span> { this.props.animal.image} </p>
         <p><span>Age:</span> { this.props.animal.age} </p>
         <p><span>Adopted:</span> { this.props.animal.adopted} </p>
         <p><span>Personality Traits:</span> { this.props.animal.personalityTraits} </p>
       </div>
      </>
    )
  }
 }
export default Show