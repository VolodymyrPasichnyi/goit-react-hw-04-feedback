import { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "./SectionTitle/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const countClick = e => {
        const click = e.target.textContent
        if (click === 'Good') {
            setGood(prev => prev + 1)
        }
        if (click === 'Neutral') {
            setNeutral(prev => prev + 1)
        }
        if (click === 'Bad') {
            setBad(prev => prev + 1)
        }
    }

    const countTotalFeedback = () => (good + neutral + bad)

    const countPositiveFeedbackPercentage = () => (
       Math.round((good * 100) / countTotalFeedback())
    )
        
    return (
        <div>
            <Section title="Please leave feedback">
            <FeedbackOptions 
                options={['Good', 'Neutral', 'Bad']}
                onLeaveFeedback={countClick}
            />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() !== 0
                ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                  />
                : <Notification 
                    message="There is no feedback"
            />
                }   
            </Section>

        </div>
    )
}

