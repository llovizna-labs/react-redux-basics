import React, {Component} from "react";
import {connect} from 'react-redux';
import Header from "../components/Header";
import {List} from "../components/List";

 class Main extends Component {
  constructor(props){
    super(props);

  }

  changeTitle(title) {
    this.setState({title});
  }


  render() {
    return (
      <div className="container">
      <div className="row">
      <Header addItem={this.props.addReminder}/>
      </div>
      <div className="row">
      <List items={this.props.reminders.items}/>
      </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    reminders: state.reminderReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (value) => {
    dispatch({
        type: 'ADD_ITEM',
        payload: value
      });
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
