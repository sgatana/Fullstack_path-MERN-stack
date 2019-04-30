import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Payments from '../Payments'

class Header extends React.Component {
  render() {
    return (
      <nav>
        {this.props.auth.isFetching ? (
          <p>loading</p>
        ) : (
          <div className="nav-wrapper blue darken-1">
            <span className="brand-logo">Fullstack</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.props.auth.user.googleId ? (
                <Fragment>
                   <li>
                    <button className="btn" style={{margin: '0 10px'}}>
                      Credits: {this.props.auth.user.credits}
                    </button>
                  </li>
                  <li>
                    <Payments />
                  </li>
                  <li>
                    <a href="/api/logout">Logout</a>
                  </li>
                </Fragment>
              ) : (
                <li>
                  <a href="/auth/google">Login with Google</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(Header)
