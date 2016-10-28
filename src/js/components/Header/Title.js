import React from "react";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Llovizna Labs';
    this.link = 'https://google.com/'
  }
  render() {
    return (
      <div>
        <a className="navbar-brand" href={this.link}>{this.title}</a>
      </div>
    );
  }
}
