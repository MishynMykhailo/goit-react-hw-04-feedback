import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, changeValuesRating }) => {
  return Object.keys(options).map(item => {
    return (
      <button
        key={item}
        name={item}
        type="button"
        onClick={changeValuesRating}
        className={s.button}
      >
        {item}
      </button>
    );
  });
};
export default FeedbackOptions;
