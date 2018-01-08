import { connect } from 'react-redux'
import App from './App'
import { 
  
} from './actions'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*getMyAppKeyHash: () => {
      dispatch(appProperty('App_Key_Hash'))
    }*/
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)