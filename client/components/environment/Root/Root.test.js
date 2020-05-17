<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

import history from '_client/history';
import store from '_client/store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root history={history} store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
=======
import React from 'react'
import ReactDOM from 'react-dom'

import history from '_client/history'
import store from '_client/store'

import Root from './Root'

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Root history={history} store={store} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
