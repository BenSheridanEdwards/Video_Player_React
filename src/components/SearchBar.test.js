import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import SearchBar from "./SearchBar";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<SearchBar {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

it("renders the SearchBar component", () => {
  const wrapper = setup({}, { term: "" });
  const searchBarComponent = findByTestAttr(wrapper, "component-search-bar");
  expect(searchBarComponent.length).toBe(1);
});

it("should call onFormSubmit when a search term is submitted", () => {
  const mockFunction = jest.fn();

  const component = mount(<SearchBar onFormSubmit={mockFunction} />);

  component.find("form").simulate("submit");
  expect(mockFunction).toHaveBeenCalled();

  component.unmount();
});

it("should change the update the state of 'term' when the input is changed", () => {
  const component = mount(<SearchBar />);

  expect(component.state()).toEqual({ term: "" });
  component
    .find("input")
    .simulate("change", { target: { name: "term", value: "test" } });
  expect(component.state()).toEqual({ term: "test" });

  component.unmount();
});
