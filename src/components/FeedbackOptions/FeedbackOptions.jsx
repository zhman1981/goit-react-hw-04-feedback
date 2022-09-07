import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

function FeedbackOptions({ onClickBtn }) {
  return (
    <Buttons>
      <button onClick={onClickBtn}>Good</button>
      <button onClick={onClickBtn}>Neutral</button>
      <button onClick={onClickBtn}>Bad</button>
    </Buttons>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
