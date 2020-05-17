<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import { attemptUpdateUser } from '_thunks/user';

export default function ChangeUsername() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [usernameCase, setUsernameCase] = useState(user.usernameCase);

  useEffect(() => {
    if (!R.isEmpty(user)) {
      setUsernameCase(user.usernameCase);
    }
  }, [user.username]);

  const updateUsernameCase = e => setUsernameCase(e.target.value);

  const disabled = (user.usernameCase === usernameCase)
    || usernameCase.toLowerCase() !== user.username;

  const saveUsernameCase = () => {
    if (usernameCase.toLowerCase() === user.username) {
      const updatedUser = { username_case: usernameCase };

      dispatch(attemptUpdateUser(updatedUser))
        .catch(() => setUsernameCase(user.usernameCase));
    }
  };
=======
import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import * as R from 'ramda'

import {attemptUpdateUser} from '../../../store/thunks/user'

export default function ChangeUsername() {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  const [usernameCase, setUsernameCase] = useState(user.usernameCase)

  useEffect(
    () => {
      if (!R.isEmpty(user)) {
        setUsernameCase(user.usernameCase)
      }
    },
    [user.username]
  )

  const updateUsernameCase = e => setUsernameCase(e.target.value)

  const disabled =
    user.usernameCase === usernameCase ||
    usernameCase.toLowerCase() !== user.username

  const saveUsernameCase = () => {
    if (usernameCase.toLowerCase() === user.username) {
      const updatedUser = {username_case: usernameCase}

      dispatch(attemptUpdateUser(updatedUser)).catch(() =>
        setUsernameCase(user.usernameCase)
      )
    }
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const helpClasses = classNames({
    help: true,
    'is-success': !disabled,
<<<<<<< HEAD
    'is-danger': disabled,
  });
=======
    'is-danger': disabled
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const inputClasses = classNames({
    input: true,
    'is-success': !disabled,
<<<<<<< HEAD
    'is-danger': disabled && usernameCase !== user.usernameCase,
  });
=======
    'is-danger': disabled && usernameCase !== user.usernameCase
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const iconClasses = classNames({
    fa: true,
    'fa-check': !disabled,
    'is-success': !disabled,
    'fa-warning': disabled && usernameCase !== user.usernameCase,
<<<<<<< HEAD
    'is-danger': disabled && usernameCase !== user.usernameCase,
  });

  const helpMessage = disabled ? `Username case must match: ${user.username}` : 'Username case valid.';

  return (
    <div className="change-username box">
      <h3 className="title is-3">
        Username
      </h3>
=======
    'is-danger': disabled && usernameCase !== user.usernameCase
  })

  const helpMessage = disabled
    ? `Username case must match: ${user.username}`
    : 'Username case valid.'

  return (
    <div className="change-username box">
      <h3 className="title is-3">Username</h3>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      <hr className="separator" />

      <div className="field">
        <label htmlFor="username" className="label">
          Current Username
        </label>
<<<<<<< HEAD
        <p className="control">
          {user.usernameCase}
        </p>
=======
        <p className="control">{user.usernameCase}</p>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      </div>

      <div className="field has-help">
        <label htmlFor="username-case" className="label">
          Username Case
        </label>
        <p className="control has-icons-right">
          <input
            id="username-case"
            className={inputClasses}
            type="text"
            placeholder="Username Case"
            value={usernameCase}
            onChange={updateUsernameCase}
          />
          <span className="icon is-small is-right">
            <i className={iconClasses} />
          </span>
        </p>
        {usernameCase !== user.usernameCase && (
<<<<<<< HEAD
          <p className={helpClasses}>
            {helpMessage}
          </p>
=======
          <p className={helpClasses}>{helpMessage}</p>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
        )}
      </div>
      <hr className="separator" />
      <button
        type="button"
        className="button is-success"
        disabled={disabled}
        onClick={saveUsernameCase}
      >
        Save
      </button>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
