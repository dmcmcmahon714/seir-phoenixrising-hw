import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    starsign: "",
    age: "",
    img: "",
    ltl: "",
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"starsign"}
          placeholder={"Starsign"}
          type={"text"}
          value={this.state.starsign}
          id={"starsign"}
        />
        <Input
          handleChange={this.handleChange}
          name={"age"}
          placeholder={"Age"}
          type={"integer"}
          value={this.state.age}
          id={"age"}
        />
        <Input
          handleChange={this.handleChange}
          name={"img"}
          placeholder={"Image URL"}
          type={"text"}
          value={this.state.img}
          id={"img"}
        />
        <Input
          handleChange={this.handleChange}
          name={"ltl"}
          placeholder={"Loves to Laugh"}
          type={"boolean"}
          value={this.state.ltl}
          id={"ltl"}
        />
        <input
          type="submit"
          value={this.props.notice ? "update this user" : "add a user"}
        />
      </form>
    );
  }
}

export default Form;