import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import SearchBar from './SearchBar';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<SearchBar {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

it("renders the VideoDetail component", () =>{
  const wrapper = setup({}, { term: 'cat' });
  const searchBarComponent = findByTestAttr(wrapper, 'component-search-bar');
  expect(searchBarComponent.length).toBe(1);
});
