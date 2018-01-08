import { connect } from 'react-redux'
import Profile from './Profile'
// import {
//   follow,
//   unfollow,
//   getAgent
// } from './actions'

const mapStateToProps = state => {
  return {
    responses: [{
      "imageUrl": "/img/maria.png",
      "name": "Mario",
      "description": "Maria was very pleasant and generous today.",
      "snaps":12,
      "annotation": "Genorosity, Mutuality, Pleasant",
      "datePosted": "2 minutes ago"
    },{
      "imageUrl": "http://mitchellsfrontpage.com/wp-content/uploads/2015/01/rwV6Ec891.jpeg",
      "name": "Berry",
      "description": "I had to leave early for a work emergency.",
      "snaps":3,
      "annotation": "Self management, Pleasant, creative, Mutuality",
      "datePosted": "58 minutes ago"
    },{
      "imageUrl": "http://equipment-international.com/wp-content/uploads/2014/03/milnor-md-50v-dryer.png",
      "name": "Monika",
      "description": "She did it!",
      "snaps":2,
      "annotation": "Self management, Logic",
      "datePosted": "2 hours ago"
    }]
  }
}

const mapDispatchToProps = (dispatch) => {
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
)(Profile)
