import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import * as R from 'ramda'
import classNames from 'classnames'
import {attemptLogout} from '../../../store/thunks/auth'

export default function Footer({pathname}) {
  const {user} = useSelector(R.pick(['user']))
  const dispatch = useDispatch()

  useEffect(
    () => {
      setAuth(!R.isEmpty(user))
    },
    [user.username]
  )
  const [auth, setAuth] = useState(!R.isEmpty(user))

  const logout = () => {
    dispatch(attemptLogout()).catch(R.identity)
  }

  const isSettings =
    pathname.length === 9
      ? pathname === '/settings'
      : R.slice(0, 10, pathname) === '/settings/'

  const settingsItemClasses = classNames({
    // 'navbar-item': true,
    // 'is-tab': true,
    'is-active': isSettings
  })
  return (
    <footer className="footer">
      {/* <div className="container"> */}
      {auth && (
        <div className="is-hoverable is-hidden-desktop">
          {user.userType && user.userType === 'donor' ? (
            <div className="footerContainer">
              <div className="footerItem">
                <Link to="/settings" className={settingsItemClasses}>
                  <img
                    width="35px"
                    height="35px"
                    src="https://img.icons8.com/all/500/settings.png"
                  />
                  <p>Settings</p>
                </Link>
              </div>
              <div className="footerItem">
                <Link to={`/${user.username}/cart`}>
                  <img
                    width="35px"
                    height="35px"
                    src="https://i.pinimg.com/originals/4e/4b/06/4e4b06fe3fbca10096ece1aa6354479b.png"
                  />
                </Link>
                <p>Donation Cart</p>
              </div>
              <div className="footerItem">
                <img
                  width="35px"
                  height="35px"
                  src="https://cdn.iconscout.com/icon/free/png-256/logout-37-459247.png"
                  onClick={logout}
                />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className="footerContainer">
              {user.userType === 'courier' ? (
                <div className="footerItem">
                  <Link to="/settings" className={settingsItemClasses}>
                    <img
                      width="35px"
                      height="35px"
                      src="https://img.icons8.com/all/500/settings.png"
                    />
                    <p>Settings</p>
                  </Link>
                </div>
              ) : null}
              {user.userType === 'courier' ? (
                <div className="footerItem">
                  <Link to={`courier/${user.username}`}>
                    <img
                      width="45px"
                      height="45px"
                      src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/163/original/delivery.png?1510082899"
                    />
                  </Link>
                  <p>Current Jobs</p>
                </div>
              ) : null}
              <div className="footerItem">
                <img
                  className="roundedImg"
                  width="35px"
                  height="35px"
                  src="https://cdn.iconscout.com/icon/free/png-256/logout-37-459247.png"
                  onClick={logout}
                />
                <p>Logout</p>
              </div>
            </div>
          )}
        </div>
      )}
      {/* </div> */}
    </footer>
  )
}
