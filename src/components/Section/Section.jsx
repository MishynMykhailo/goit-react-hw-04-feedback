import s from '../Section/Section.module.css';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
