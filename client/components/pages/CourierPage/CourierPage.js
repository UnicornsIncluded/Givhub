import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  attemptGetLinkedUser,
  updateStoredSocket
} from "../../../store/thunks/user";
// let linkedUser = "pending";
// let linkedUserId;

// If donor linked user number is equal to courier number and courier linked number user is equal to donor number

export class CourierPage extends React.Component {
  componentDidMount() {
    let linkedUserId = this.props.user.linkedUser
    this.props.attemptGetLinkedUser(linkedUserId);
    console.log("COURIER PROPS", this.props)
  }
  componentDidUpdate() {
    console.log('UPDATED COURIER PROPS', this.props)
  }
  render() { 
    let donorInfo = this.props.linkedUser
    let courierInfo = this.props.user
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            {courierInfo.user == donorInfo.linkedUser && courierInfo.linkedUser == donorInfo.user
            ? <h1 id="courierTitle" className="title is-1"> {donorInfo.username} has requested a pick up! </h1>
          :<h1 id="courierTitle" className="title is-1"> Waiting for job... </h1>}
          </div>
        </div>
      </div>
    );
  }
}

// export function CourierPage(props) {
//   const dispatch = useDispatch();
//   const { user } = useSelector(R.pick(["user"]));
//   let linkedUsername;
//   useEffect(() => {
//     if (!R.isEmpty(user)) {
//       dispatch(push("/courier/2"));
//     }
//     async function fetchData() {
//       let linkedUserProps = await props.attemptGetLinkedUser(linkedUserId)
//       linkedUsername = linkedUserProps.username
//     }
//     fetchData()
//   }, []);
//   console.log('currently', props)
//   return (
//     <div className="welcome-page page">
//       <div className="section">
//         <div className="container">
//           <br />
//           <br />
//           <br />
//           <br />
//           {/* {console.log(props)} */}
//           {typeof props.user.linkedUser == "number" ? (
//             <div>
//               {/* how do you do this vvvv */}
//               {linkedUserId = 14}
//             <h1 className="title is-1">New Job!</h1>
//             <h2>Please pick up order from {linkedUsername}</h2>
//             </div>
//           ) : (
//             <h1 id="courierTitle" className="title is-1">
//               Waiting for job...
//             </h1>
//           )}

//           {/* <Button variant="success" size="lg"> Press Me! </Button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

function mapStateToProps(state) {
  return { user: state.user, donors: state.donors, linkedUser: state.linkedUser};
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetLinkedUser: (linkedUserId) => dispatch(attemptGetLinkedUser(linkedUserId)),
    // updateStoredSocket: (userSocketId) =>
    //   dispatch(updateStoredSocket(userSocketId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourierPage);
