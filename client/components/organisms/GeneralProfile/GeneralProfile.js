import React from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "_thunks/user";
import AddAddress from "../../molecules/AddAddress/AddAddress";

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
        {this.state.userType === "donor" ? (
          <div>
            <br />
            <AddAddress />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails)),
});

export default connect(null, mapDispatchToProps)(GeneralProfile);
