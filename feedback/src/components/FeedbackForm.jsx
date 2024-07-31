import { createSignal } from "solid-js";
import Button from "./layout/Button";
import Rating from "./Rating";

const spanStyle = {
  display: "block",
  fontStyle: "italic",
  marginTop: "10px",
};

function FeedbackForm() {


  return (
    <div class="container">
      <div class="card">
        <form>
          <h3>Kindly drop Feedback for our service you just experienced.</h3>
          <Rating/>
          <br />
          <br />
          <div class="input-group">
            <input
              type="text"
              placeholder="Write your feedback here"
            />
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;