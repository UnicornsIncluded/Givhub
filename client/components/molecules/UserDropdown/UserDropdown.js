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

  return null
}

UserDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired
}
