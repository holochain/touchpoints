import React, { Component } from 'react'

class ProfileImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [{
        imageUrl: "/img/maria.jpeg"
      }]
    };
  }

  render() {
    return (
      <div>
        <img width="256" height="256" src={this.state.images[0].imageUrl} />
      </div>
    )
  }
}

export default ProfileImage
