import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const baseURL = "https://www.googleapis.com/youtube/v3";

    const response = await axios.get(baseURL + "/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.YOUTUBE_API_KEY
      }
    });
    this.setVideosToState(response);
    return response;
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  setVideosToState = response => {
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container" data-test="component-app">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail
                video={this.state.selectedVideo}
                data-test="component-video-detail"
              />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
                data-test="component-video-list"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
