/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video.jsx';
import Filter from './Filter.jsx';


const scrollDistance = 680;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.videos = [];
    this.state.currentCategory = 'Featured';
    this.state.isVisible = false;
    this.state.videoId = props.videoId;
    this.state.rightCircleIsVisible = true;
    this.state.leftCircleIsVisible = false;

    this.handleOnRightClick = this.handleOnRightClick.bind(this);
    this.handleOnLeftClick = this.handleOnLeftClick.bind(this);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
  }

  componentDidMount() {
    const { videoId } = this.state;
    fetch(`videos/${videoId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          videos: data.videos,
        });
      });
  }

  handleOnChange(e) {
    const stateObj = this.state;
    if (stateObj.isVisible) {
      this.setState({ isVisible: true });
    }

    const { videoId } = this.state;
    const categoryId = e.target.value;
    fetch(`filter/${videoId}/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          videos: data.videos,
          currentCategory: data.videos[0].category.name,
        });
      });
  }

  handleOnRightClick() {
    const oldScroll = document.getElementById('scrollMe').scrollLeft;
    document.getElementById('scrollMe').scrollLeft += scrollDistance;

    if (document.getElementById('scrollMe').scrollLeft === oldScroll) {
      this.setState({ rightCircleIsVisible: false });
    }

    if (document.getElementById('scrollMe').scrollLeft !== 0) {
      this.setState({ leftCircleIsVisible: true });
    }
  }

  handleOnLeftClick() {
    document.getElementById('scrollMe').scrollLeft -= scrollDistance;

    if (document.getElementById('scrollMe').scrollLeft === 0) {
      this.setState({ leftCircleIsVisible: false });
    }
    this.setState({ rightCircleIsVisible: true });
  }

  handleOnClickMenu() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }

  render() {
    const { state } = this;
    const rightArrow = '<';
    const leftArrow = '>';
    const { rightCircleIsVisible, leftCircleIsVisible } = this.state;
    const right = rightCircleIsVisible ? 'right visible' : 'right invisible';
    const left = leftCircleIsVisible ? 'left visible' : 'left invisible';

    return (
      <div>
        <Filter
          onClickOption={this.handleOnChange}
          currentCategory={state.currentCategory}
          onClickMenu={this.handleOnClickMenu}
          isVisible={state.isVisible}
        />
        <div id="container">
          <div className={left} onClick={this.handleOnLeftClick}>
            <svg height="50" width="50">
              <circle id="circle1" cx="25" cy="25" fill="#18181b" r="25" />
              <text fill="#9147ff" fontFamily="Arial" fontSize="30px" x="35%" y="68%">{rightArrow}</text>
            </svg>
          </div>
          <div id="scrollMe">
            {state.videos.map((video) => <Video video={video} />)}
          </div>
          <div className={right} onClick={this.handleOnRightClick}>
            <svg height="50" width="50">
              <circle id="circle2" cx="25" cy="25" fill="#18181b" r="25" />
              <text fill="#9147ff" fontFamily="Arial" fontSize="30px" x="35%" y="68%">{leftArrow}</text>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  videoId: PropTypes.number.isRequired,
};
export default App;
