import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <>
        <div className="details">
         <h3>Animal info:</h3>
         <hr/>
         <h4> { this.props.animal.name } Day </h4>
         <h6><span>Likes:</span> {this.props.animal.likes}</h6>
         <p><span>Description:</span> { this.props.animal.description } </p>
       </div>
      </>
    )
  }
 }
export default Show