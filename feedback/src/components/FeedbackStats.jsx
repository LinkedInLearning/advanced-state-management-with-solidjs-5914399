import { createMemo } from "solid-js";

function FeedbackStats({ feedback }) {
  // Calculate total number of feedback items
  const totalFeedback = createMemo(() => feedback.length);

  // Calculate average rating
  const averageRating = createMemo(() => {
    if (feedback.length === 0) return 0;
    const totalRating = feedback.reduce((acc, curr) => acc + curr.rating, 0);
    return (totalRating / feedback.length).toFixed(1);
  });

  return (
    <div className="feedback-stats">
      <p>Total Feedbacks: {totalFeedback()}</p>
      <p>Average Rating: {averageRating()}</p>
    </div>
  );
}

export default FeedbackStats;