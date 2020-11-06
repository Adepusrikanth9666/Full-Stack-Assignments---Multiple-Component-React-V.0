import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name"> Glowing Minds</h1>
        <p data-ns-test="project-description">
          It is an Business Application in which the both the clients one who
          hasidea about the start-up Business(with no money) and the other one
          whohas an investment to start a Business but no idea .So by this
          application the idea hamster can Log-In and post there Business
          ideasand in the same the investers can choose the liked ideas and the
          can connect ech other and start the start-up. They can contact or
          connect byproviding google map OR with the address.
        </p>
      </>
    );
  }
}

export default App;
