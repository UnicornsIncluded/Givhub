<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import useKeyPress from '_hooks/useKeyPress';
import { postCheckUsername } from '_api/users';
import { validateUsername, validatePassword } from '_utils/validation';
import { attemptRegister } from '_thunks/auth';

import Box from '_molecules/Box';
import Button from '_atoms/Button';

export default function Register() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const checkPassword = (newUsername, newPassword) => {
    const { valid, message } = validatePassword(newUsername, newPassword);

    setPasswordValid(valid);
    setPasswordMessage(message);
  };

  const checkUsername = newUsername => {
    const { valid, message } = validateUsername(newUsername);

    if (valid) {
      setUsernameMessage('Checking username...');
      setUsernameAvailable(false);

      postCheckUsername(newUsername)
        .then(res => {
          setUsernameAvailable(res.available);
          setUsernameMessage(res.message);
        })
        .catch(R.identity);
    } else {
      setUsernameAvailable(valid);
      setUsernameMessage(message);
    }
  };

  const updateUsername = newUserName => {
    setUsername(newUserName);
    checkPassword(newUserName, password);
  };

  const handleUsernameChange = e => {
    updateUsername(e.target.value);
    checkUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    checkPassword(username, e.target.value);
  };
=======
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import {useDispatch} from 'react-redux'
import * as R from 'ramda'

import useKeyPress from '../../../hooks/useKeyPress'
import {postCheckUsername} from '../../../api/users'
import {validateUsername, validatePassword} from '../../../utils/validation'
import {attemptRegister} from '../../../store/thunks/auth'

import Box from '../../molecules/Box'
import Button from '../../atoms/Button'

export default function Register() {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const checkPassword = (newUsername, newPassword) => {
    const {valid, message} = validatePassword(newUsername, newPassword)

    setPasswordValid(valid)
    setPasswordMessage(message)
  }

  const checkUsername = newUsername => {
    const {valid, message} = validateUsername(newUsername)

    if (valid) {
      setUsernameMessage('Checking username...')
      setUsernameAvailable(false)

      postCheckUsername(newUsername)
        .then(res => {
          setUsernameAvailable(res.available)
          setUsernameMessage(res.message)
        })
        .catch(R.identity)
    } else {
      setUsernameAvailable(valid)
      setUsernameMessage(message)
    }
  }

  const updateUsername = newUserName => {
    setUsername(newUserName)
    checkPassword(newUserName, password)
  }

  const handleUsernameChange = e => {
    updateUsername(e.target.value)
    checkUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
    checkPassword(username, e.target.value)
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const register = () => {
    if (usernameAvailable && passwordValid) {
      const newUser = {
        username,
<<<<<<< HEAD
        password,
      };

      dispatch(attemptRegister(newUser))
        .catch(R.identity);
    }
  };

  useKeyPress('Enter', register);
=======
        password
      }

      dispatch(attemptRegister(newUser)).catch(R.identity)
    }
  }

  useKeyPress('Enter', register)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const usernameIconClasses = classNames({
    fa: true,
    'fa-check': usernameAvailable,
    'fa-warning': username && !usernameAvailable,
    'is-success': usernameAvailable,
<<<<<<< HEAD
    'is-danger': username && !usernameAvailable,
  });
=======
    'is-danger': username && !usernameAvailable
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const usernameInputClasses = classNames({
    input: true,
    'is-success': usernameAvailable,
<<<<<<< HEAD
    'is-danger': username && !usernameAvailable,
  });
=======
    'is-danger': username && !usernameAvailable
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const usernameHelpClasses = classNames({
    help: true,
    'is-success': usernameAvailable,
<<<<<<< HEAD
    'is-danger': username && !usernameAvailable,
  });
=======
    'is-danger': username && !usernameAvailable
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const passwordIconClasses = classNames({
    fa: true,
    'fa-check': passwordValid,
    'fa-warning': password && !passwordValid,
    'is-success': passwordValid,
<<<<<<< HEAD
    'is-danger': password && !passwordValid,
  });
=======
    'is-danger': password && !passwordValid
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const passwordInputClasses = classNames({
    input: true,
    'is-success': passwordValid,
<<<<<<< HEAD
    'is-danger': password && !passwordValid,
  });
=======
    'is-danger': password && !passwordValid
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const passwordHelpClasses = classNames({
    help: true,
    'is-success': passwordValid,
<<<<<<< HEAD
    'is-danger': password && !passwordValid,
  });

  return (
    <Box className="register">
      <h3 className="title is-3">
        Sign Up
      </h3>
      <hr className="separator" />
      <p className="has-space-below">
        Already a member?&nbsp;
        <Link to="/login">
          Login
        </Link>
=======
    'is-danger': password && !passwordValid
  })

  return (
    <Box className="register">
      <h3 className="title is-3">Sign Up</h3>
      <hr className="separator" />
      <p className="has-space-below">
        Already a member?&nbsp;
        <Link to="/login">Login</Link>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      </p>

      <div className="field">
        <label htmlFor="username" className="label">
          Username
        </label>
        <p className="control has-icons-right">
          <input
            id="username"
            className={usernameInputClasses}
            placeholder="Username"
            type="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <span className="icon is-small is-right">
            <i className={usernameIconClasses} />
          </span>
        </p>
<<<<<<< HEAD
        {username && (
          <p className={usernameHelpClasses}>
            {usernameMessage}
          </p>
        )}
=======
        {username && <p className={usernameHelpClasses}>{usernameMessage}</p>}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      </div>

      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <p className="control has-icons-right">
          <input
            id="password"
            className={passwordInputClasses}
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="icon is-small is-right">
            <i className={passwordIconClasses} />
          </span>
        </p>
<<<<<<< HEAD
        {password && (
          <p className={passwordHelpClasses}>
            {passwordMessage}
          </p>
        )}
=======
        {password && <p className={passwordHelpClasses}>{passwordMessage}</p>}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      </div>

      <hr className="separator" />

      <div className="has-text-right">
        <Button
          type="success"
          disabled={!passwordValid || !usernameAvailable}
          onClick={register}
          label="Create Account"
        />
      </div>
    </Box>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
