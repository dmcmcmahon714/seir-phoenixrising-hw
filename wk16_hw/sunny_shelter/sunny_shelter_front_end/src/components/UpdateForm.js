import React from 'react'

class UpdateForm extends React.Component {
  render () {
    return (
      <div className="modal edit">
        <form>
          <div className="row">
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
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
            <label htmlFor="personalityTraits">Personality Traits</label>
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