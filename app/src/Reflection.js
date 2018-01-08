import React, { Component } from 'react';
import IconButton from './IconButton';

class Reflection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="overview_message">YOU WERE WITH</div>
        <div
          style={{ background: "url('/img/maria.png') center center" }}
          className="user_image ">
          {/* <img  src="/img/maria.png" /> */}
        </div>
        <br />

        <div className="name">MARIA</div>
        <div className="time">15m ago</div>
        <div className="dev_message">
          Developmental Edge: My developmental edge is to grow and open my mind
          to new people.
        </div>
        <div className="prompt_message">ANYTHING NOTEWORTHY?</div>

        <div className="container">
          <div className="row">
            <div className="col-xs-3" />
            <div className="col-xs-3">
              <IconButton label="YES" />
            </div>
            <div className="col-xs-3">
              <IconButton label="NO" />

              <div className="col-md-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reflection;
