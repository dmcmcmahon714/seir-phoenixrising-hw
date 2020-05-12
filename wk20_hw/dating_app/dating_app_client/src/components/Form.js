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

   handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { name, starsign, age, img, ltl } = this.state;
    const dater = {
      name: name,
      starsign: starsign,
      age: age,
      img: img,
      ltl: ltl,
    };

    if (this.props.dater) dater.id = this.props.dater.id;

    this.props.handleSubmit(event, dater);
  };

  componentDidMount() {
    if (this.props.dater) {
      const { name, starsign, age, img, ltl, id } = this.props.dater;
      this.setState({
        name: name || "",
        starsign: starsign || "",
        age: age || "",
        img: img || "",
        ltl: ltl || "",
        id: id || "",
      });
    }
  }

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