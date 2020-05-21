import React from 'react'
import {render} from 'react-dom'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import history from './history'
import store from './store'

import Root from './components/environment/Root'

render(<Root history={history} store={store} />, document.getElementById('app'))
