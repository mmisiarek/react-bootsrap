import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '../js/components/Title/index';

describe('Title component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.contains(<div>Hello stranger</div>)).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render name when provided', () => {
    const wrapper = shallow(<Title name="John" />);
    expect(wrapper.contains(<div>Hello John</div>)).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
