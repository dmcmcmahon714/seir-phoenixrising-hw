import React from "react";
import Form from "./Form.js";

class Notice extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, dater) => {
    console.log("update running");
    this.props.handleUpdate(event, dater);
    this.toggleForm();
  };

  render() {
    const { dater, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <Form
            dater={dater}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="dater">
            <h3>{dater.name}</h3>
            <p>{dater.starsign}</p>
            <small>{dater.age}</small>
            <button onClick={() => handleDelete(dater)}>X</button>
            <button onClick={this.toggleForm}>Edit this Dater</button>
          </div>
        )}
      </>
    );
  }
}

export default Dater;