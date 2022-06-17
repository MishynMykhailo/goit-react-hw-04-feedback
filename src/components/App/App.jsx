import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = items => {
    const label = items.target.textContent;

    this.setState(prevState => ({
      [label]: (prevState[label] += 1),
    }));
  };
  countTotalFeedback() {
    let total = Object.values(this.state);
    return total.reduce((acc, number) => {
      return acc + number;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    let result = Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const items = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={items}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
