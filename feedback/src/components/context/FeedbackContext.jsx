import {
  createEffect,
  createContext,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";

const FeedbackContext = createContext();

export function FeedbackProvider(props) {
  const [state, setState] = createStore({ feedback: [], loading: true });

  const fetchFeedback = async () => {
    try {
      setState("loading", true);
      const res = await fetch("http://localhost:4500/feedback");
      const data = await res.json();
      setState({ feedback: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
      setState("loading", false);
    }
  };

  createEffect(() => {
    fetchFeedback();
  });

  // Function to add new feedback
  const addFeedback = async (newFeedback) => {
    try {
      const res = await fetch("http://localhost:4500/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });
      const data = await res.json();
      setState("feedback", (feedback) => [...feedback, data]); // Append new feedback to state
    } catch (error) {
      console.error("Failed to add feedback:", error);
    }
  };

  return (
    <FeedbackContext.Provider value={{ state, addFeedback }}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}