import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <ul className={s.ul}>
          <li className={s.li}>Good: {good}</li>
          <li className={s.li}>Neutral: {neutral}</li>
          <li className={s.li}>Bad: {bad}</li>
          <li className={s.li}>Total: {total}</li>
          <li className={s.li}>
            Positive feedback:{' '}
            <span style={{ color: positivePercentage >= 50 ? 'green' : 'red' }}>
              {positivePercentage + '%'}
            </span>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback 😔" />
      )}
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  nutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
