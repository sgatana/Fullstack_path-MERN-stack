import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/authActions'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="container">
        <p>Welcome to Dashboard {this.props.user.id}</p>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})
const mapStateToProps = state => ({
  user: state.auth
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
