import React, { Component } from 'react';

export default class IconButton extends Component {
  render(props) {
    return <button className="icon">{this.props.label}</button>;
  }
}
