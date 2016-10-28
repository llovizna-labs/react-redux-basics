import React, {Component} from "react";

import Header from "./Header";

import Container from "./Container";

export default class Layout extends Component {
  constructor(){
    super();
    this.state = {
      name: 'will'
    };
  }
  render() {
    return (
      <div className="container-fluid">
      <Container/>
      </div>
    );
  }
}
