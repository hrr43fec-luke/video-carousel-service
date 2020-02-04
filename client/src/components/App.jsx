/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */

import React from 'react';
import Video from './Video.jsx';
import Filter from './Filter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.username = '';
    this.state.videos = [];
    this.state.currentCategory = 'Featured';
    this.state.isVisible = false;

    this.handleOnRightClick = this.handleOnRightClick.bind(this);
    this.handleOnLeftClick = this.handleOnLeftClick.bind(this);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    // document.addEventListener('mousedown', this.handleClickOutside);

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

  /* componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  } */

  setWrapperRef(node) {
    console.log('inside wrapper');
    this.wrapperRef = node;
    console.log(node);
  }

  handleOnChange(e) {
    const stateObj = this.state;
    if (stateObj.isVisible) {
      this.setState({ isVisible: true });
    }

    const userId = 1;
    const categoryId = e.target.value;
    fetch(`filter/${userId}/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          username: data.user.username,
          videos: data.videos,
          currentCategory: data.videos[0].category.name,
        });
      });
  }

  handleOnRightClick() {
    document.getElementById('container').scrollLeft += 50;
  }

  handleOnLeftClick() {
    document.getElementById('container').scrollLeft -= 50;
  }

  handleOnClickMenu() {
    const stateObj = this.state;
    const isVisible = !stateObj.isVisible;
    this.setState({ isVisible });
  }

  /* handleClickOutside(event) {
    console.log('here outside');
    console.log('handle node', this.wrapperRef);
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isVisible: false,
      });
    }
  } */

  render() {
    const stateObj = this.state;
    const rightArrow = '<';
    const leftArrow = '>';

    return (
      <div>
        <div>
          <Filter
            onClickOption={this.handleOnChange}
            currentCategory={stateObj.currentCategory}
            onClickMenu={this.handleOnClickMenu}
            isVisible={stateObj.isVisible}
            // ref={this.setWrapperRef}
          />
        </div>
        <div id="container">
          <div className="left" onClick={this.handleOnLeftClick}>
            <svg height="50" width="50">
              <circle id="circle1" cx="25" cy="25" fill="#18181b" r="25" />
              <text fill="#9147ff" fontFamily="Arial" fontSize="30px" x="35%" y="68%">{rightArrow}</text>
            </svg>
          </div>
          {stateObj.videos.map((video) => <Video video={video} />)}
          <div className="right" onClick={this.handleOnRightClick}>
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

export default App;
