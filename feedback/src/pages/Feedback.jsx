import { createSignal, createEffect } from "solid-js";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList"
import FeedbackStats from "../components/FeedbackStats";

function Feedback() {
    const [feedback, setFeedback] = createSignal([]);
    const [loading, setLoading] = createSignal(true);

    createEffect(() => {
      fetch("http://localhost:4500/feedback")
        .then((response) => response.json())
        .then((data) => {
          setFeedback(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching feedback:", error);
          setLoading(false);
        });
    });

  return (
    <>
      <FeedbackForm />
      <div className="container">
        <FeedbackStats feedback={feedback()} />
        <FeedbackList feedback={feedback()} loading={loading()} />
      </div>
    </>
  );
}

export default Feedback;
