import { connect } from 'react-redux'
import Demonstration from './Demonstration'
// import {
//   follow,
//   unfollow,
//   getAgent
// } from './actions'



const mapStateToProps = state => {
  return {
    tags: [{
      "imageUrl": "/img/maria.png",
      "name": "Maria",
      "lastVisible": "2 minutes ago"
    },{
      "imageUrl": "http://mitchellsfrontpage.com/wp-content/uploads/2015/01/rwV6Ec891.jpeg",
      "name": "Stephanie",
      "lastVisible": "58 minutes ago"
    },{
      "imageUrl": "http://equipment-international.com/wp-content/uploads/2014/03/milnor-md-50v-dryer.png",
      "name": "Drying Machine",
      "lastVisible": "2 hours ago"
    },{
      "imageUrl": "https://s3.amazonaws.com/rtaproducts/dreamline/images/thumb/Charisma_Sliding_Shower_Door_04.jpg",
      "name": "Door",
      "lastVisible": "4 hours ago"
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
)(Demonstration)
