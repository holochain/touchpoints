import React, { Component } from 'react';
import IconButton from './IconButton';

class ReflectionDetail extends Component {
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

        <div className="section">
          <div className="prompt_message">ANYTHING NOTEWORTHY?</div>

          <textarea className="form-control mainInput" />
        </div>

        <div className="container">
          <div className="row">
            <div className="buttonWrapper">
              <IconButton _icon="/img/abundance_icon.png" label="ABUNDANCE" />
              <IconButton label="MUTUALITY" _icon="/img/mutuality_icon.png" />
              <IconButton
                label="COLLABORATION"
                _icon="/img/collaboration_icon.png"
              />
            </div>
            <div className="buttonWrapper">
              <IconButton label="EFFICIENCY" _icon="/img/efficiency_icon.png" />
              <IconButton label="CREATIVITY" _icon="/img/creativity_icon.png" />
              <IconButton label="GENEROSITY" _icon="/img/generosity_icon.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReflectionDetail;
