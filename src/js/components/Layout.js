import React, {Component} from "react";
import Main from "../containers/Main";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
      <Main/>
      </div>
    );
  }
}
