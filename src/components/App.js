import React, { Component } from 'react'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtubeAPI from '../apis/youtubeAPI'

class App extends Component {
  state = {
    videoData: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onInputTermSubmit('S2000')
  }

  // Function to get searched video
  onInputTermSubmit = async inputTerm => {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: inputTerm
      }
    })

    this.setState({
      ...this.state,
      videoData: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  // Function to get the selected video
  onVideoSelect = video => {
    this.setState({ ...this.state, selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onInputTermSubmit={this.onInputTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoData={this.state.videoData}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
