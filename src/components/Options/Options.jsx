import css from './Options.module.css';
import { Button } from '../Button/Button';
import currData  from '../../json-data/currdata.json';

export const Options = ({ data, setData }) => {
  const { bad, good, neutral } = data;
  const totalFeedback = good + neutral + bad;

  const update = (option) => {
    setData({
      ...data,
      [option]: data[option] + 1,
    });
  };

  const reset = () => {
    setData(currData)
  };

    return (
      <ul className={css.list}>
        <li className={css.item} key="good">
          <Button onClick={() => update('good')}>
            Good
          </Button>
        </li>
        <li className={css.item} key="neutral">
          <Button onClick={() => update('neutral')}>
            Neutral
          </Button>
        </li>
        <li className={css.item} key="bad">
          <Button onClick={() => update('bad')}>
            Bad
          </Button>
        </li>
        {Boolean(totalFeedback) && (
        <li className={css.item} key="reset">
        <Button onClick={reset}>
          Reset
        </Button>
        </li>)}
      </ul>
    )
  };