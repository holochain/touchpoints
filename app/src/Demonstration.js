import React, { Component } from 'react'

class Demonstration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFollowText: 'Other Person'
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>YOU WERE WITH</h3>
          <div className="row">
            <div className="col-xs-1 col-sm-2">
            </div>
            <div className="col-xs-10 col-sm-6">
              {this.props.tags.map((tag, idx)=> {
                return (
                <div key={idx} className="row demo-list-item">
                  <div className="col-xs-2">
                    <img src={tag.imageUrl} width="64" height="64" alt="Avatar" />
                  </div>
                  <div className="col-xs-6">
                    <h3>{tag.name}</h3>
                  </div>
                  <div className="col-xs-2">
                    <h4>Yes</h4>
                  </div>
                  <div className="col-xs-2">
                    <h4>No</h4>
                  </div>
                </div>
                )
              })}
            </div>
            <div className="col-xs-1 col-sm-2">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demonstration
