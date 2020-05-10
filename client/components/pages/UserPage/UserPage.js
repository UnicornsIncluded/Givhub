import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { push } from "connected-react-router";
import * as R from "ramda";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";
import {
  attemptUpdateUserCourier,
  attemptGetLinkedUser,
} from "../../../store/thunks/user";
const socket = io(window.location.origin);

let courier;
let linkedUserId;
let matched;
let donor;
export function UserPage(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push("/user/1"));
    }
  }, []);
  const handleClick = () => {
    matched = true;
    courier = 4;
    donor = 3;
    linkedUserId = 4;
    // make not hard coded
    props.attemptUpdateUserCourier(4, 3);
    props.attemptGetLinkedUser(4);
    console.log("PROPS", props.user.username);
    socket.emit("clicked");
  };

  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1 id="userTitle" className="title is-1">
            Please Press Button To Alert a Courier to Pick Up Donation!
          </h1>
          {/* onClick emits 'clicked' */}
          <Button
            id="userButton"
            variant="success"
            size="lg"
            onClick={() => handleClick()}
          >
            {" "}
            Press Me!{" "}
          </Button>{" "}
          {matched == true ? (
            <h2>{props.user.username} is picking up your donation</h2>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapping");
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  console.log("dispatching");
  return {
    attemptUpdateUserCourier: () => dispatch(attemptUpdateUserCourier(courier, donor)),
    attemptGetLinkedUser: () => dispatch(attemptGetLinkedUser(linkedUserId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
