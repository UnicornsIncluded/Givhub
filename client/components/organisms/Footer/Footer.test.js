<<<<<<< HEAD
import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  test('renders as a <footer> element', () => {
    expect(wrapper.type()).toBe('footer');
  });
});
=======
import React from 'react'
import {shallow} from 'enzyme'

import Footer from './Footer'

const wrapper = shallow(<Footer />)

describe('<Footer />', () => {
  test('renders as a <footer> element', () => {
    expect(wrapper.type()).toBe('footer')
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
