import { Wrapper } from './styled';

import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handlerClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handlerClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    const visible =
      this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;

    return (
      <Wrapper>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          onClickGood={this.handlerClickGood}
          onClickNeutral={this.handlerClickNeutral}
          onClickBad={this.handlerClickBad}
        />
        <Section title="Statistics" />
        {!visible && <Notification message="There is no feedback" />}

        {visible && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Wrapper>
    );
  }
}
