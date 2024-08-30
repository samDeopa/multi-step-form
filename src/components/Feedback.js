import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Feedback = ({ handleFeedback }) => {
  return (
    <div className="feedback">
      <h3>Was this experience helpful?</h3>
      <button
        className="btn btn-success"
        onClick={() => handleFeedback("like")}
      >
        <FaThumbsUp /> Like
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleFeedback("dislike")}
      >
        <FaThumbsDown /> Dislike
      </button>
    </div>
  );
};

export default Feedback;
