/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({
  onClickOption, currentCategory, isVisible, onClickMenu,
}) => {
  const selectClassName = isVisible ? ' custom-select open' : 'custom-select';
  let featuredClass = 'custom-option';
  let pastBroadClass = 'custom-option';
  let pastPremiereClass = 'custom-option';
  let collectionsClass = 'custom-option';

  if (currentCategory === 'Featured') {
    featuredClass = 'custom-option selected';
    pastBroadClass = 'custom-option';
    pastPremiereClass = 'custom-option';
    collectionsClass = 'custom-option';
  } else if (currentCategory === 'Past Broadcasts') {
    featuredClass = 'custom-option';
    pastBroadClass = 'custom-option selected';
    pastPremiereClass = 'custom-option';
    collectionsClass = 'custom-option';
  } else if (currentCategory === 'Past Premieres') {
    featuredClass = 'custom-option';
    pastBroadClass = 'custom-option';
    pastPremiereClass = 'custom-option selected';
    collectionsClass = 'custom-option';
  } else if (currentCategory === 'Collections') {
    featuredClass = 'custom-option';
    pastBroadClass = 'custom-option';
    pastPremiereClass = 'custom-option';
    collectionsClass = 'custom-option selected';

  }

  return (
    <div className="custom-select-wrapper" onClick={onClickMenu}>
      <div className={selectClassName}>
        <div className="custom-select__trigger">
          <span>{currentCategory}</span>
          <div className="arrow" />
        </div>
        <div className="custom-options">
          <option className={featuredClass} onClick={onClickOption} value="1">Featured</option>
          <option className={pastBroadClass} onClick={onClickOption} value="2">Past Broadcasts</option>
          <option className={pastPremiereClass} onClick={onClickOption} value="3">Past Premieres</option>
          <option className={collectionsClass} onClick={onClickOption} value="4">Collections</option>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onClickOption: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default Filter;

