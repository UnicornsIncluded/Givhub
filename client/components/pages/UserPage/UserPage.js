import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { fetchCart } from '../../../store/reducers/userCart';

export class UserPage extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.props.getCartItems("gigi@email.com")
    console.log(this.props.userCart)
  }
  // const dispatch = useDispatch();
  // const { user } = useSelector(R.pick(['user']));

  // useEffect(() => {
  //   if (!R.isEmpty(user)) {
  //     dispatch(push('/user/gigi@email.com/cart'));
  //   }
  // }, []);


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
          Please Press Button To Alert a Courier to Pick Up Donation!
        </h1>
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