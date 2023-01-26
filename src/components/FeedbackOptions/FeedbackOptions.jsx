import propTypes from 'prop-types';
import css from 'components/FeedbackOptions/Feedback.module.css'


export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
    <div className={css.div}>
        {options.map(option => (
          <button 
            className={css.buttons}
            key={option}
            onClick={onLeaveFeedback}
           >
            {option}
          </button>
        ))}
    </div>  
    )
}    

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,

}

