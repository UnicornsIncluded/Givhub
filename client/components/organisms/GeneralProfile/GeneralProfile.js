<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "_thunks/user";
import AddAddress from "../../molecules/AddAddress/AddAddress";
import AddNumber from "../../molecules/AddNumber/AddNumber";
=======
import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'
import AddAddress from '../../molecules/AddAddress/AddAddress'
import AddNumber from '../../molecules/AddNumber/AddNumber'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

// export function GeneralProfile(props) {
//   const handleSubmit = (event) => {
//     console.log("entered handle submit");
//     event.preventDefault();
//     let email = event.target.email.value;
//     let userType = event.target.userType.value;
//     console.log(email, userType);
//     props.attemptUpdateUser({ email, userType });
//   };
//   return (
//     <form onSubmit={() => handleSubmit(event)}>
//       <label htmlFor="email">Email</label>
//       <input type="text" name="email" required />
//       <select id="typeOptions" name="userType">
//         <option value="donor">Donor</option>
//         <option value="courier">Courier</option>
//       </select>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export class GeneralProfile extends React.Component {
  constructor() {
<<<<<<< HEAD
    super();
    this.state = {
      userType: "",
    };
  }
  handleSubmit = (event) => {
    console.log("entered handle submit");
    event.preventDefault();
    let email = event.target.email.value;
    let userType = event.target.userType.value;
    console.log(email, userType);
    this.setState({
      userType: userType,
    });
    this.props.attemptUpdateUser({ email, userType });
  };
=======
    super()
    this.state = {
      userType: ''
    }
  }
  handleSubmit = event => {
    console.log('entered handle submit')
    event.preventDefault()
    let email = event.target.email.value
    let userType = event.target.userType.value
    console.log(email, userType)
    this.setState({
      userType: userType
    })
    this.props.attemptUpdateUser({email, userType})
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  render() {
    return (
      <div>
        <h2>Insert Email, Pick account type</h2>
        <form onSubmit={() => this.handleSubmit(event)}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
          <select id="typeOptions" name="userType">
            <option value="donor">Donor</option>
            <option value="courier">Courier</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <br />
<<<<<<< HEAD
        {this.state.userType === "donor" ||
        this.state.userType === "courier" ? (
          <AddNumber />
        ) : null}
        {this.state.userType === "donor" && this.props.user.phoneNumber ? (
=======
        {this.state.userType === 'donor' ||
        this.state.userType === 'courier' ? (
          <AddNumber />
        ) : null}
        {this.state.userType === 'donor' && this.props.user.phoneNumber ? (
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
          <div>
            <br />
            <AddAddress />
          </div>
        ) : null}
      </div>
<<<<<<< HEAD
    );
  }
}

const mapStateToProps = (state) => {
  return {user:state.user}
}

const mapDispatchToProps = (dispatch) => ({
  attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralProfile);
=======
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralProfile)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
