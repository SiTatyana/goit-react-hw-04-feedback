import React from 'react';
import PropTypes from 'prop-types';
import {ButtonsList, Buttons} from './FeedbackOptions.styled';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <ButtonsList>
        {options.map(option => {
          return (
            <Buttons
              type='button'
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Buttons>
          );
        })}
      </ButtonsList>
    );
  }

  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}
  

// export default function FeedbackOptions ({onLeaveFeedback}) {
//     return (
//         <ButtonsList>
//                 <li>
//                     <Buttons onClick={() => onLeaveFeedback("good")}>Good</Buttons>
//                 </li>
//                 <li>
//                     <Buttons onClick={() => onLeaveFeedback("neutral")}>Neutral</Buttons>
//                 </li>
//                 <li>
//                     <Buttons onClick={() => onLeaveFeedback("bad")}>Bad</Buttons>
//                 </li>
//             </ButtonsList>
//     )
// }