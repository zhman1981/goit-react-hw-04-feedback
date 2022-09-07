import React from 'react';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad } = props;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>
        Positive feedback:{' '}
        {Math.round((good / (good + neutral + bad)) * 100) || 0} %
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
