import { connect } from 'react-redux'
import Response from './response'
// import {
//   follow,
//   unfollow,
//   getAgent
// } from './actions'



const mapStateToProps = state => {
  return {
    tags: [{
      "imageUrl": "http://via.placeholder.com/250/000000",
      "name": "Maria"
    },{
      "imageUrl": "http://via.placeholder.com/250/000000",
      "name": "Stephanie"
    },{
      "imageUrl": "http://via.placeholder.com/250/000000",
      "name": "Drying Machine"
    },{
      "imageUrl": "http://via.placeholder.com/250/000000",
      "name": "Door"
    }]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
  // return {
  //   follow: (handle) => {
  //     dispatch(getAgent(handle, userHash => {
  //       if (userHash) {
  //         dispatch(follow(userHash))
  //       } else {
  //         console.log('no user found with handle ' + handle)
  //       }
  //     }))
  //   },
  //   unfollow: (userHash, then) => {
  //     dispatch(unfollow(userHash, then))
  //   }
  // }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Response)
