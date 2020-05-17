<<<<<<< HEAD
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import * as R from "ramda";
import { Spacer } from "../../atoms/Spacer";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push("/login"));
    }
  }, []);
=======
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import * as R from 'ramda'
import {Spacer} from '../../atoms/Spacer'
import {Link} from 'react-router-dom'

export default function HomePage() {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'))
    }
  }, [])
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className="home-page page">
      <div className="section">
<<<<<<< HEAD
        {user.userType == "donor" ? (
          <Link to={`/${user.username}/cart`}>
          <div className="container">
            <Spacer />
            <img
              className="roundedImg"
              width = "150px"
              height = "150px"
              src="https://i.pinimg.com/originals/4e/4b/06/4e4b06fe3fbca10096ece1aa6354479b.png"
            />
            <h1 className="title is-1">Donation Cart</h1>
            {/* <hr className="rounded" /> */}
          </div>
          </Link>
        ) : (
          <Link to={`courier/${user.username}`}>
          <div className="container">
            <Spacer />
            <img
              className="roundedImg"
              width = "150px"
              height = "150px"
              src="data:image/png;base64,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"
            />
            <h1 className="title is-1">Current Jobs</h1>
            {/* <hr className="rounded" /> */}
          </div>
=======
        {user.userType == 'donor' ? (
          <Link to={`/${user.username}/cart`}>
            <div className="container">
              <Spacer />
              <img
                className="roundedImg"
                width="150px"
                height="150px"
                src="https://i.pinimg.com/originals/4e/4b/06/4e4b06fe3fbca10096ece1aa6354479b.png"
              />
              <h1 className="title is-1">Donation Cart</h1>
              {/* <hr className="rounded" /> */}
            </div>
          </Link>
        ) : (
          <Link to={`courier/${user.username}`}>
            <div className="container">
              <Spacer />
              <img
                className="roundedImg"
                width="150px"
                height="150px"
                src="data:image/png;base64,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"
              />
              <h1 className="title is-1">Current Jobs</h1>
              {/* <hr className="rounded" /> */}
            </div>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
          </Link>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
