const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <div>
      <button type="button" onClick={onClickGood}>
        Good
      </button>
      <button type="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onClickBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
