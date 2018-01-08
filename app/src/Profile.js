import React, { Component } from 'react'

class IconButton extends Component {
  render(props) {
    return <button className="icon">{this.props.label}</button>;
  }
}


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFollowText: 'Other Person'
    }
  }
  render() {
    return (
      <h1>O</h1>
    )
  }
}

export default Profile
