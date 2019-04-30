import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { onHandleToken } from '../../actions/payments'
import { connect } from 'react-redux'

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Fullstack Path"
        description="$5 for 5 emial credits"
        amount={500} // amount in cents
        currency="USD"
        ComponentClass="div"
        token={token => this.props.handleToken(token)} // submit callback
        stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
      >
        <button className="btn blue darken-2">Add Credits</button>
      </StripeCheckout>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  handleToken: token => onHandleToken(token, dispatch)
})
export default connect(
  null,
  mapDispatchToProps
)(Payments)
