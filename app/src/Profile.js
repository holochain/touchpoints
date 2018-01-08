import React, { Component } from 'react'
import ProfileImage from './ProfileImage'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFollowText: 'Other Person'
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6"  style={{marginTop: 50, marginBottom: 50}}>
            <ProfileImage />
          </div>
          <div className="col-sm-6 center"  style={{marginTop: 80}}>
            <h1>Maria</h1>
            <p>Workstation: Puree Machine</p>
            <p>Developmental Edge: Not enough experience. Learn how to problem solve better to help my co-workers.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="left">Pinned Interaction</h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-2">
            <img src="http://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Blue-Dr-Who-icon.png" width="64" height="64" alt="Avatar" />
          </div>
          <div className="col-sm-2">
            <h3>Dr Who. Wrote: </h3>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="left">Maria was very creative and helped me fix a problem that was going to destroy the universe as we know it. She showed problem solving skills, was pleasant, and new how to manage herself even in tough situations.</h3>
              </div>
              <div className="col-sm-8">
                <p><b>Creativity, helpful, problem solving, self management, Experience</b></p>
              </div>
              <div className="col-sm-1">
                <p><b>20 Snaps</b></p>
              </div>
              <div className="col-sm-2">
                <p>Jan 29 2018</p>
              </div>
            </div>
          </div>
        </div>
        {this.props.responses.map((tag, idx)=> {
          return (
            <div key={idx} style={{marginLeft: 30, marginRight: 30}} className="row underline_item">
              <div className="col-sm-2">
                <img src={tag.imageUrl} width="64" height="64" alt="Avatar" />
              </div>
              <div className="col-sm-3">
                <h3>{tag.name} Wrote: </h3>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="left">{tag.description}</h3>
                  </div>
                  <div className="col-sm-8">
                    <p><b>{tag.annotation}</b></p>
                  </div>
                  <div className="col-sm-1">
                    <p><b>{tag.snaps} Snaps</b></p>
                  </div>
                  <div className="col-sm-1">
                  </div>
                  <div className="col-sm-2">
                    <p>{tag.datePosted}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    )
  }
}

export default Profile
