import React, { Component } from 'react';
import './App.css';

class IconButton extends Component {
  render(props) {
    return <button className="icon">{this.props.label}</button>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TOUCHPOINT</header>
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
            <div className="col-xs-4">
              <IconButton label="process icon" />
            </div>
            <div className="col-xs-4">
              <IconButton label="personal icon" />
            </div>
            <div className="col-xs-4">
              <div className="col-md-4">
                <IconButton label="about maria" />
              </div>{' '}
            </div>
          </div>
        </div>

        <button className="btn btn-primary continue ">Not Now</button>
      </div>
    );
  }
}

export default App;
