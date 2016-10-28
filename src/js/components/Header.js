import React, {Component} from "react";
import Title from "./Header/Title";

export default class Header extends Component {

  handleChange(e){
    const title =  e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
      <Title />
        <h1>Crazy Reminders</h1>
        <br/>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Remind me to..."
              value={this.props.title} onChange={this.handleChange.bind(this)} />
          <span className="input-group-btn">
           <button className="btn btn-default" type="button">Please!</button>
         </span>
        </div>
        <br/>
          <h1>{this.props.title}</h1>
      </div>
    );
  }
}
