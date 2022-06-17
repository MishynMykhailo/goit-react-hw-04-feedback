import s from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
