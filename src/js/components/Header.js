import React, {Component} from "react";
import Title from "./Header/Title";

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  handleChange(e) {
    const title =  e.target.value;
    this.setState({title})
  }

  addItem() {
    this.props.addItem({
      id: 0,
      value: this.state.title
    });

    this.setState({title: null});
  }

  render() {
    return (
      <div>
      <Title />
        <h1>Crazy Reminders</h1>
        <br/>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Remind me to..."
              value={this.state.title} onChange={this.handleChange.bind(this)} />
          <span className="input-group-btn">
           <button className="btn btn-default" type="submit" onClick={this.addItem.bind(this)}>Please!</button>
         </span>
        </div>
        <br/>
      </div>
    );
  }
}
