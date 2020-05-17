<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Main from '_environment/Main';

import '../../../socket'
export default function Root({ history, store }) {
=======
import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import Main from '../../environment/Main'

import '../../../socket'
export default function Root({history, store}) {
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
<<<<<<< HEAD
  history: PropTypes.object.isRequired,
};
=======
  history: PropTypes.object.isRequired
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
