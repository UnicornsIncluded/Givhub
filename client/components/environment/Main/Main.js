<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router";
import Notifications from "react-notification-system-redux";
import { useDispatch, useSelector } from "react-redux";
import * as R from "ramda";

import { attemptGetUser } from "_thunks/user";

// import WelcomePage from "_pages/WelcomePage";
import LoginPage from "_pages/LoginPage";
import RegisterPage from "_pages/RegisterPage";
import HomePage from "_pages/HomePage";
import TodoPage from "_pages/TodoPage";
import SettingsPage from "_pages/SettingsPage";
import LostPage from "_pages/LostPage";
import UserPage from "_pages/UserPage";
import CourierPage from "_pages/CourierPage";
import ThankYouPage from "_pages/ThankYouPage"
=======
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
// import Map from '../../molecules/Map/Map'
// import Mapbox from '../../molecules/Map/Mapbox'
import Receipt from '../../molecules/Receipt/Receipt'

<<<<<<< HEAD
import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';
import OrderInProgressPage from '../../pages/OrderInProgressPage/OrderInProgress';
import MapboxCourier from "../../molecules/Map/Mapbox_Courier";
import MapboxDonor from "../../molecules/Map/Mapbox_Donor";
=======
import Navigation from '../../organisms/Navigation'
import Footer from '../../organisms/Footer'
import OrderInProgressPage from '../../pages/OrderInProgressPage/OrderInProgress'
import MapboxCourier from '../../molecules/Map/Mapbox_Courier'
import MapboxDonor from '../../molecules/Map/Mapbox_Donor'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

// import Navigation from "_organisms/Navigation";
// import Footer from "_organisms/Footer";

<<<<<<< HEAD
export default function Main({ location }) {
  const dispatch = useDispatch();
  const { alerts } = useSelector(R.pick(["alerts"]));
  const { user } = useSelector(R.pick(["user"]));
  const [loading, setLoading] = useState(true);
=======
export default function Main({location}) {
  const dispatch = useDispatch()
  const {alerts} = useSelector(R.pick(['alerts']))
  const {user} = useSelector(R.pick(['user']))
  const [loading, setLoading] = useState(true)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => setLoading(false))
<<<<<<< HEAD
      .catch(R.identity);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
=======
      .catch(R.identity)
  }, [])
  useEffect(
    () => {
      window.scrollTo(0, 0)
    },
    [location.pathname]
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    !loading && (
      <div className="has-navbar-fixed-top">
        <Notifications notifications={alerts} />
        <Navigation pathname={location.pathname} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={LoginPage} />
<<<<<<< HEAD
            {user.userType == "donor" ? (
=======
            {user.userType == 'donor' ? (
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
              <Route path="/map" component={MapboxDonor} />
            ) : (
              <Route path="/map" component={MapboxCourier} />
            )}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={HomePage} />
<<<<<<< HEAD
            <Route path="/todo" component={TodoPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/:username/cart" component={UserPage} />
            <Route path="/courier/:courierId" component={CourierPage} />
            <Route path="/test/:username/receipt" component={Receipt}/>
            <Route path="/:username/oip" component={OrderInProgressPage}/> 
=======
            <Route path="/settings" component={SettingsPage} />
            <Route path="/:username/cart" component={UserPage} />
            <Route path="/courier/:courierId" component={CourierPage} />
            <Route path="/test/:username/receipt" component={Receipt} />
            <Route path="/:username/oip" component={OrderInProgressPage} />
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            <Route path="/thankyou" component={ThankYouPage} />
            <Route path="*" component={LostPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

Main.propTypes = {
  location: PropTypes.shape({
<<<<<<< HEAD
    pathname: PropTypes.string,
  }).isRequired,
};
=======
    pathname: PropTypes.string
  }).isRequired
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
