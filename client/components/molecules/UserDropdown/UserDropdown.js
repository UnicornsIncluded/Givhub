<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as R from "ramda";

import { attemptLogout } from "_thunks/auth";

export default function UserDropdown({ open, closeDropdown }) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));

  const dropdown = useRef(null);
=======
import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as R from 'ramda'

import {attemptLogout} from '../../../store/thunks/auth'

export default function UserDropdown({open, closeDropdown}) {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  const dropdown = useRef(null)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  // const dropdownListener = (e) =>
  //   !e.path.includes(dropdown.current) && open && closeDropdown();

  // useEffect(() => {
  //   window.addEventListener("click", dropdownListener);
  //   window.addEventListener("touchend", dropdownListener);

  //   return () => {
  //     window.removeEventListener("click", dropdownListener);
  //     window.removeEventListener("touchend", dropdownListener);
  //   };
  // }, [open]);

  // const logout = () => {
  //   closeDropdown();
  //   dispatch(attemptLogout()).catch(R.identity);
  // };

<<<<<<< HEAD
  return (
    null
=======
  return null
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  //   open && (
  //     <div className="dropdown box" ref={dropdown}>
  //       <ul className="dropdown-list">
  //         <li className="dropdown-header">{user.usernameCase}</li>
  //         <hr className="dropdown-separator" />
  //         <li className="dropdown-item">
  //         {user.userType == "donor" ? (
  //             <Link to={`/${user.username}/cart`} onClick={closeDropdown}>
  //               Donation Cart
  //             </Link>
  //         ) : (
  //           <Link to={`courier/${user.username}`}>
  //             <h6 className="title is-6">Current Jobs</h6>
  //           </Link>
  //         )}
  //         </li>
  //         <li className="dropdown-item">
  //           <Link to="/settings" onClick={closeDropdown}>
  //             Settings
  //           </Link>
  //         </li>
  //         <hr className="dropdown-separator" />
  //         <li className="dropdown-item">
  //           <a onClick={logout} onKeyPress={logout}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   )
<<<<<<< HEAD
  );
=======
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

UserDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
<<<<<<< HEAD
  closeDropdown: PropTypes.func.isRequired,
};
=======
  closeDropdown: PropTypes.func.isRequired
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
