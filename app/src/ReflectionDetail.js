import React, { Component } from 'react';
import IconButton from './IconButton';

class ReflectionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notice: 'Abundance',
      description: ''
    };
  }
  setNotice = (notice) => {
    this.setState({
      notice
    })
  }
  setDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  submitReflection() {
    this.props.createReflection({
      notice: this.state.notice,
      description: this.state.description,
      stamp: Date.now()
    })
  }
  checkClassName(buttonType) {
    if (this.state.notice === buttonType) {
      return "buttonPressed"
    } else return ""
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

          <textarea value={this.state.description} onChange={this.setDescription} className="form-control mainInput" />
        </div>

        <div className="container">
          <div className="row">
            <div className="buttonWrapper">
              <div className={this.checkClassName('Abundance')} onClick={() => this.setNotice("Abundance")}>
                <IconButton _icon="/img/abundance_icon.png" label="ABUNDANCE" />
              </div>
              <div className={this.checkClassName('Mutuality')} onClick={() => this.setNotice("Mutuality")}>
                <IconButton label="MUTUALITY" _icon="/img/mutuality_icon.png" />
              </div>
              <div className={this.checkClassName('Collaboration')} onClick={() => this.setNotice("Collaboration")}>
                <IconButton
                  label="COLLABORATION"
                  _icon="/img/collaboration_icon.png"
                />
              </div>
            </div>
            <div className="buttonWrapper">
              <div className={this.checkClassName('Efficiency')} onClick={() => this.setNotice("Efficiency")}>
                <IconButton label="EFFICIENCY" _icon="/img/efficiency_icon.png" />
              </div>
              <div className={this.checkClassName('Creativity')} onClick={() => this.setNotice("Creativity")}>
                <IconButton label="CREATIVITY" _icon="/img/creativity_icon.png" />
              </div>
              <div className={this.checkClassName('Generosity')} onClick={() => this.setNotice("Generosity")}>
                <IconButton label="GENEROSITY" _icon="/img/generosity_icon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReflectionDetail;
