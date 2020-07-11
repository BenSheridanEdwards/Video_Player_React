import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";

import App from "../App";
import VideoList from "./VideoList";

const defaultProps = {
  video: null,
  onVideoSelect: App.onVideoSelect
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<VideoList {...setupProps} />);
};

it("does not throw warning with expected props", () => {
  checkProps(VideoList, defaultProps);
});

it("renders the video list component", () => {
  const wrapper = setup({ videos: [] });
  const componentVideoList = findByTestAttr(wrapper, "component-video-list");
  expect(componentVideoList.length).toBe(1);
});

describe("when a video has been selected", () => {
  let mockFunction;
  let wrapper;
  beforeEach(() => {
    mockFunction = jest.fn();
    const video = {
      snippet: { thumbnails: { medium: "123" }, title: "title" },
      id: { videoId: "123" }
    };
    wrapper = setup({ videos: [video], onVideoSelect: { mockFunction } });
  });

  // it("should call the onVideoSelect function", () => {
  //   expect(mockFunction).toHaveBeenCalled();
  // });

  it("should render a list of video items", () => {
    const videoItemList = findByTestAttr(wrapper, "component-video-item");
    expect(videoItemList.length).toBe(1);
  });
});
