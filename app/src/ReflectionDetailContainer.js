import { connect } from 'react-redux';
import ReflectionDetail from './ReflectionDetail';
import {
  createReflection
} from './actions'

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    createReflection: (reflection) => {
      return dispatch(createReflection(reflection))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionDetail);
