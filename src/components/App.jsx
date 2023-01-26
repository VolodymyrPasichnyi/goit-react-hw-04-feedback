import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "./SectionTitle/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

    countClick = e => {
        const click = e.target.innerText.toLowerCase()
        this.setState(prevState => {
            return {
                [click]: prevState[click] + 1,
            }
        })
    }

    // countClickGood = () => {
    //     this.setState((prevState) => ({ good: (prevState.good += 1) }))
    // }

    // countClickNeutral = () => {
    //     this.setState((prevState) => ({ neutral: (prevState.neutral += 1) }))
    // }

    // countClickBad = () => {
    //     this.setState((prevState) => ({ bad: (prevState.bad += 1) }))
    // }

    countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)

    countPositiveFeedbackPercentage = () => (
       Math.round((this.state.good * 100) / this.countTotalFeedback())
    )


    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                <FeedbackOptions 
                    options={['Good', 'Neutral', 'Bad']}
                    onLeaveFeedback={this.countClick}
                />
                </Section>

                <Section title="Statistics">
                {this.countTotalFeedback() !== 0
                ? <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
                : <Notification 
                    message="There is no feedback"
                />}   
                </Section>

            </div>
        )
    }
}

