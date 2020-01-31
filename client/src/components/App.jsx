
import React from 'react';
// eslint-disable-next-line import/extensions
import Video from './Video.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.username = '';
    this.state.videos = [];
  }


  componentDidMount() {
    const videoId = 1;
    fetch(`videos/${videoId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          username: data.user.username,
          videos: data.videos,
        });
      });
  }

  render() {
    const stateObj = this.state;
    return (
      <div className="slider">
        {stateObj.videos.map((video) => <Video video={video} />)}
      </div>
    );
  }
}

export default App;
