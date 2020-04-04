import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  
  onTermSubmit = async term => {
    const KEY = 'AIzaSyAPVtFX1-MfrL_LONvpYCDa3chTzDuRQBc';

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
}

export default App
