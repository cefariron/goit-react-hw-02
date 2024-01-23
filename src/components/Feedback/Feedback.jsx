import css from './Feedback.module.css';

export const Feedback = ( { data: { good, neutral, bad } } ) => {
  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  const FeedbackList = () => {
    return (
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {totalFeedback}</li>
        <li className={css.item}>Positive: {positiveFeedback}%</li>
      </ul>
    );
  };

    return (
      <div>
      {!totalFeedback ? <p className={css.item}>No feedback yet</p> : <FeedbackList />}
    </div>
    )
  }