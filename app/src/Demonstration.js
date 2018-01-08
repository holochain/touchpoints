import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
var FontAwesome = require('react-fontawesome')

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
            <div className="col-xs-10 col-sm-8">
              {this.props.tags.map((tag, idx)=> {
                return (
                <div key={idx} className="row center demo-list-item">
                  <div className="col-xs-2">
                    <img src={tag.imageUrl} width="64" height="64" alt="Avatar" />
                  </div>
                  <div className="col-xs-6">
                    <h3 className="left">{tag.name}</h3>
                    <p className="left">{tag.lastVisible}</p>
                  </div>
                  <div className="col-xs-4">
                    <p>ANYTHING NOTABLE?</p>
                    <div className="row">
                      <div className="col-xs-6">
                        <Link to={''}>
                          <FontAwesome
                            className="super-crazy-colors"
                            name="rocket"
                            size="2x"
                            spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                          <h4>No</h4>
                        </Link>
                      </div>
                      <div className="col-xs-6">
                        <Link to={''}><h4>Yes</h4></Link>
                      </div>
                    </div>
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
