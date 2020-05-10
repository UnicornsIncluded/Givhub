import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { push } from "connected-react-router";
import * as R from "ramda";
import Button from "react-bootstrap/Button";
import {
  attemptGetLinkedUser,
} from "../../../store/thunks/user";
let linkedUser = "pending";
let linkedUserId;
export function CourierPage(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));
  let linkedUsername;
  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push("/courier/2"));
    }
    async function fetchData() {
      let linkedUserProps = await props.attemptGetLinkedUser(linkedUserId)
      linkedUsername = linkedUserProps.username
    }
  }, []);

  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          {/* {console.log(props)} */}
          {typeof props.user.linkedUser == "number" ? (
            <div>
              {/* how do you do this vvvv */}
              {linkedUserId = 3}
            <h1 className="title is-1">New Job!</h1>
            <h2>Please pick up order from {linkedUsername}</h2>
            </div>
          ) : (
            <h1 id="courierTitle" className="title is-1">
              Waiting for job...
            </h1>
          )}

          {/* <Button variant="success" size="lg"> Press Me! </Button> */}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetLinkedUser: () => dispatch(attemptGetLinkedUser(linkedUserId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourierPage);
