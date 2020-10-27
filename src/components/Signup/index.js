import Signup from './Signup';
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
    postUser: userInfo => dispatch(postUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);