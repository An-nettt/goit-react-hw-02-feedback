import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
export default class App extends Component {
  state = {
    good: 5,
    neutral: 0,
    bad: 0,
  };
  // options;

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

  countTotalFeedback = () =>
    this.setState(prevState => {
      return { total: prevState.good };
    });

  // countPositiveFeedbackPercentage()

  render() {
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          onClickGood={this.handlerClickGood}
          onClickNeutral={this.handlerClickNeutral}
          onClickBad={this.handlerClickBad}
        />

        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
        />
      </div>
    );
  }
}
