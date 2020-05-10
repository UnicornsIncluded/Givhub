import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { fetchCart } from '../../../store/reducers/userCart';
import Box from '../../molecules/Box'

export class UserPage extends React.Component {
  constructor(){
    super()
    this.state = {
      donating: ''
    }
    this.handleDonateChange = this.handleDonateChange.bind(this)
  }

  componentDidMount(){
    this.props.getCartItems("gigi@email.com")
  }
  // const dispatch = useDispatch();
  // const { user } = useSelector(R.pick(['user']));

  // useEffect(() => {
  //   if (!R.isEmpty(user)) {
  //     dispatch(push('/user/gigi@email.com/cart'));
  //   }
  // }, []);
  handleDonateChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
    
  }

  render () {
    return (
    
    <div className="welcome-page page">
    <div className="section">
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <h1 className="title is-1">
          Donation Cart
        </h1>
        <Box>
        <h3 className="title is-3">
        Donate a Food!
        </h3>
        <div className="field">
        <label htmlFor="username" className="label">
        </label>
        <p className="control has-icons-right">
          <input
            id="donating"
            // className={usernameInputClasses}
            placeholder="Can of beans.."
            type="donating"
            value={this.state.donating}
            onChange={this.handleDonateChange}
          />
          {/* <span className="icon is-small is-right">
            <i className={usernameIconClasses} />
          </span> */}
        </p>
        {/* {username && (
          <p className={usernameHelpClasses}>
            {usernameMessage}
          </p>
        )} */}
      </div>

        </Box>
        <div className="donoList">
          <ul>
            {this.props.userCart.map((item, id=0) => {
              id++
              return(
              <li key = {id}>{item.name}</li>
              )
            })}
          </ul>
        </div>
      <Button variant="success" size="lg"> Donate Now! </Button>        </div>
    </div>
  </div>
    );
  }  
}

const mapState = state => {
  console.log('this is state ', state)
  return {
    userCart: state.userCart
  }
}

const mapDispatch = dispatch => {
  return {
    getCartItems: username => {
      dispatch(fetchCart(username))
    }
  }
}

export default connect(mapState, mapDispatch)(UserPage)