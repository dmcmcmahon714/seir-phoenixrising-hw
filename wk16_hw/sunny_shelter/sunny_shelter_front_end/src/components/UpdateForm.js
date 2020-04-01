import React from 'react'

class UpdateForm extends React.Component {
  render () {
    return (
      <div className="modal edit">
        <form>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
            />
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
            />
            <label htmlFor="breed">Likes</label>
            <input
              type="text"
              id="breed"
            />
            <label htmlFor="image">Image</label>
            <input
              type="image"
              id="breed"
            />
             <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
            />
            <label htmlFor="adopted">adopted</label>
            <input
              type="text"
              id="adopted"
            />
            <label htmlFor="personalityTraits">adopted</label>
            <input
              type="text"
              id="personalityTraits"
            />
            <input type="submit" value="Update Animal" className="button-primary" />
            <button className="button-red"> Don't Update </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm