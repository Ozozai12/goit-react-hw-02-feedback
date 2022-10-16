import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import React from 'react';
import css from 'components/Feedbacks/Feedbacks.module.css';

export class Feedbacks extends React.Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
    visible: true,
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        visible: false,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        visible: false,
      };
    });
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        visible: false,
      };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage() {
    let positive =
      this.state.good / (this.state.bad + this.state.neutral + this.state.good);
    return positive ? positive * 100 : '';
  }

  render() {
    return (
      <div className={css.feedback}>
        <Section title="Left your feedback">
          <FeedbackOptions
            onBad={this.handleBad}
            onNeutral={this.handleNeutral}
            onGood={this.handleGood}
          />
        </Section>
        {this.state.visible && <Notification message="There is no feedback" />}
        {!this.state.visible && (
          <Section title="Statistics">
            <Statistics
              bad={this.state.bad}
              neutral={this.state.neutral}
              good={this.state.good}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
              visible={this.state.visible}
            />
          </Section>
        )}
      </div>
    );
  }
}
