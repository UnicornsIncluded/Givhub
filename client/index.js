<<<<<<< HEAD
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import history from '_client/history';
import store from '_client/store';

import Root from '_environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
=======
import React from 'react'
import {render} from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import history from './history'
import store from './store'

import Root from './components/environment/Root'

render(<Root history={history} store={store} />, document.getElementById('app'))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
