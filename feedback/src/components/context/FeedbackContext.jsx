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

return (
    <FeedbackContext.Provider value={{ state }}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}