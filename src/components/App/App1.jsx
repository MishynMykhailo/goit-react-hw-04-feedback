import { useEffect, useState } from 'react';

export const Apps = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeValueRating = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    const totalCount = good + neutral + bad;
    console.log(totalCount);
  }, [good, neutral, bad]);

  return (
    <div>
      <label>
        {good}
        <button type="button" name="good" onClick={changeValueRating}>
          good
        </button>
      </label>

      <label>
        {neutral}
        <button type="button" name="neutral" onClick={changeValueRating}>
          neutral
        </button>
      </label>
      <label>
        {bad}
        <button type="button" name="bad" onClick={changeValueRating}>
          bad{' '}
        </button>
      </label>
    </div>
  );
};
