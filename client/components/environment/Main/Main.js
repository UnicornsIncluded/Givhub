import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router'
import Notifications from 'react-notification-system-redux'
import {useDispatch, useSelector} from 'react-redux'
import * as R from 'ramda'

import {attemptGetUser} from '../../../store/thunks/user'

// import WelcomePage from "_pages/WelcomePage";
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import HomePage from '../../pages/HomePage'
import SettingsPage from '../../pages/SettingsPage'
import LostPage from '../../pages/LostPage'
import UserPage from '../../pages/UserPage'
import CourierPage from '../../pages/CourierPage'
import ThankYouPage from '../../pages/ThankYouPage'
// import Map from '../../molecules/Map/Map'
// import Mapbox from '../../molecules/Map/Mapbox'
import Receipt from '../../molecules/Receipt/Receipt'

import Navigation from '../../organisms/Navigation'
import Footer from '../../organisms/Footer'
import OrderInProgressPage from '../../pages/OrderInProgressPage/OrderInProgress'
import MapboxCourier from '../../molecules/Map/Mapbox_Courier'
import MapboxDonor from '../../molecules/Map/Mapbox_Donor'

// import Navigation from "_organisms/Navigation";
// import Footer from "_organisms/Footer";

export default function Main({location}) {
  const dispatch = useDispatch()
  const {alerts} = useSelector(R.pick(['alerts']))
  const {user} = useSelector(R.pick(['user']))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => setLoading(false))
      .catch(R.identity)
  }, [])
  useEffect(
    () => {
      window.scrollTo(0, 0)
    },
    [location.pathname]
  )

  return (
    !loading && (
      <div className="has-navbar-fixed-top">
        <Notifications notifications={alerts} />
        <Navigation pathname={location.pathname} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            {user.userType == 'donor' ? (
              <Route path="/map" component={MapboxDonor} />
            ) : (
              <Route path="/map" component={MapboxCourier} />
            )}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/:username/cart" component={UserPage} />
            <Route path="/courier/:courierId" component={CourierPage} />
            <Route path="/test/:username/receipt" component={Receipt} />
            <Route path="/:username/oip" component={OrderInProgressPage} />
            <Route path="/thankyou" component={ThankYouPage} />
            <Route path="*" component={LostPage} />
          </Switch>
        </div>
        <Footer pathname={location.pathname} />
      </div>
    )
  )
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}
