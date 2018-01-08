import React, { Component } from 'react';

class Testing extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.createReflection({notice: "Commitment", description: "so cool", stamp: Date.now()})}>Send Reflection</button>
      </div>
    );
  }
}

export default Testing;
