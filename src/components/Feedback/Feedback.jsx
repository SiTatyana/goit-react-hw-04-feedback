import { Component } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";


export default class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      countTotalFeedback(){
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
      }

      countPositiveFeedbackPercentage(propertyName){
        const total = this.countTotalFeedback();
        if(!total){
            return 0;
        }
        const good = this.state[propertyName];
        const result = (good/total) *100;
        return Number(result.toFixed(2));
      }
    
      onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
      }

  
    render () {
        const total= this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage("good");
        const { good, neutral, bad } = this.state;
        const options = ["good", "neutral", "bad"];
       return ( 
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                onLeaveFeedback={this.onLeaveFeedback} options={options} />
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
    
    )}  }
  
  