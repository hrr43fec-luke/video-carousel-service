/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

    this.handleOnRightClick = this.handleOnRightClick.bind(this);
    this.handleOnLeftClick = this.handleOnLeftClick.bind(this);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    document.querySelector('.custom-select-wrapper')
      .addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
        this.querySelector('.custom-select__trigger').classList.toggle('open');
      });

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

  handleOnChange(e) {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
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


  render() {
    const stateObj = this.state;
    const rightArrow = '<';
    const leftArrow = '>';

    return (
      <div>
        <div>
          <Filter onClick={this.handleOnChange} currentCategory={stateObj.currentCategory} />
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
