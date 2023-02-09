import PropTypes from 'prop-types';
import Style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={Style.statisticsElem}>
      {' '}
      Good: <span>{good}</span>
    </p>
    <p className={Style.statisticsElem}>
      Neutral: <span>{neutral}</span>
    </p>
    <p className={Style.statisticsElem}>
      Bad: <span>{bad}</span>
    </p>
    <p className={Style.statisticsElem}>
      Total: <span>{total}</span>
    </p>
    <p className={Style.statisticsElem}>
      Positive percentage: <span>{positivePercentage}</span>%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
