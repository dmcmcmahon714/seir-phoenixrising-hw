import React, { Component } from 'react';
import Daters from './components/Hello.js';
import Aside from './components/Aside';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';



class App extends React.Component {
  state = {
    daters: [],
  };

  handleAdd = (dater, formInputs) => {
    // event.preventDefault();
    fetch("http://localhost:3000/daters", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdDater) => createdDater.json())
      .then((jsonedDater) => {
        // add notice to notices
        this.setState({
          daters: [jsonedDater, ...this.state.daters],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedDater) => {
    fetch(`http://localhost:3000/daters/${deletedDater.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const daters = this.state.daters.filter(
          (dater) => dater.id !== deletedDater.id
        );
        this.setState({ daters });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (dater, formInputs) => {
    // event.preventDefault();
    console.log("in it to win it");
    fetch(`http://localhost:3000/daters/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedDater) => {
        // go wild
        this.getDaters();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getDaters();
  }

  getDaters = () => {
    fetch("http://localhost:3000/daters")
      .then((response) => response.json())
      .then((json) => this.setState({ daters: json }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside />
          <Main/>
          <Nav
          daters={this.state.daters}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App