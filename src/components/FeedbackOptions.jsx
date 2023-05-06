import { FeedbackWrapper, Button } from './styled';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <FeedbackWrapper>
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
    </FeedbackWrapper>
  );
};
