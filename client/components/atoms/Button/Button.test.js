<<<<<<< HEAD
import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const wrapper = shallow(<Button />);

describe('<Button />', () => {
  test('Renders as a <button> element', () => {
    expect(wrapper.type()).toEqual('button');
  });
});
=======
import React from 'react'
import {shallow} from 'enzyme'

import Button from './Button'

const wrapper = shallow(<Button />)

describe('<Button />', () => {
  test('Renders as a <button> element', () => {
    expect(wrapper.type()).toEqual('button')
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
