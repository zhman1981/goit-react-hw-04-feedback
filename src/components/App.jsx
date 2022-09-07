import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Main } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = event => {
    switch (event.target.textContent) {
      case 'Good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'Bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;
      default:
        return;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Main>
        <Section title="Please leave feedback">
          <FeedbackOptions onBtnClick={this.onClickBtn} />
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
}

export default App;
