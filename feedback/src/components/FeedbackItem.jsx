import { FaRegularCircleXmark } from "solid-icons/fa";

function FeedbackItem({ feedback }) {
  return (
    <div class="card">
      <div class="r-display">{feedback.rating}</div>
      <div>{feedback.text}</div>
      <button class="close">
        <FaRegularCircleXmark />
      </button>
    </div>
  );
}

export default FeedbackItem;