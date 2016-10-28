import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";

export default class Container extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: null
    };
  }

  changeTitle(title) {
    this.setState({title});
  }


  render() {
    return (
      <div className="container">
      <div className="row">
      <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
      </div>
      <div className="row">
      <List/>
      </div>
      </div>
    );
  }
}
