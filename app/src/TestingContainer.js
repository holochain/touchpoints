import { connect } from 'react-redux'
import Testing from './Testing'
import { 
  createReflection
} from './actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReflection: (reflection) => {
      dispatch(createReflection(reflection))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Testing)