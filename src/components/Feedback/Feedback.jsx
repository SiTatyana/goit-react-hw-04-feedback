import { useState } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";


export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
        return good + neutral + bad;
      }

      const countPositiveFeedbackPercentage = (property) => {
        const total = countTotalFeedback();
        if(!total){
            return 0;
        }
        const good = property;
        const result = (good/total) *100;
        return Number(result.toFixed(2));
      }
    
      const onLeaveFeedback = (propertyName) => {
        switch (propertyName) {
          case "good":
            return setGood ((prev) => prev + 1);
          case "neutral":
            return setNeutral ((prev) => prev + 1);
          case "bad":
            return setBad ((prev) => prev + 1); 
          default: return;
        }
      }
      
      const total= countTotalFeedback();
      const positivePercentage = countPositiveFeedbackPercentage(good);
      const options = ["good", "neutral", "bad"];

  return (
      <div>
          <Section title="Please leave feedback">
              <FeedbackOptions 
              onLeaveFeedback={onLeaveFeedback} options={options} />
          </Section>
          <Section title="Statistics">
              {!total ? <div> Unfortunately there are no reviews, but you can be the first ☺️ </div> :
              <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {total}
              positivePercentage = {positivePercentage}/>
              }
              
          </Section>
      </div>
  )
}

  
  