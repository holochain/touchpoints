import React, { Component } from 'react';

export default class IconButton extends Component {
  render(props) {
    return (
      <button className="icon">
        <img className="iconImage" src={this.props._icon} />
        <span className="icon-label">{this.props.label}</span>
      </button>
    );
  }
}
