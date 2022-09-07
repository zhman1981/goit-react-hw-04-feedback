import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Main } from './App.styled';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = event => {
    setGood(prevState => {
      return event.target.textContent === 'Good' ? prevState + 1 : prevState;
    });
    setNeutral(prevState => {
      return event.target.textContent === 'Neutral' ? prevState + 1 : prevState;
    });
    setBad(prevState => {
      return event.target.textContent === 'Bad' ? prevState + 1 : prevState;
    });
  };
  return (
    <Main>
      <Section title="Please leave feedback">
        <FeedbackOptions onClickBtn={onClickBtn} />
      </Section>
      <Section title="Statistics">
        {good + neutral + bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Main>
  );
}

export default App;
