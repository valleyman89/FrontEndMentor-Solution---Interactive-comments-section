import React, { useState } from "react";
import { ReactComponent as Plus } from "../svg/icon-plus.svg";
import { ReactComponent as Minus } from "../svg/icon-minus.svg";

function ScoreCounter(props) {
  const [count, setState] = useState(props.score);
  const [disable, setDisable] = useState(false);

  const handleVote = (vote) => {
    vote === "up" ? setState(count + 1) : setState(count - 1);
    setDisable(true);
  };

  return (
    <React.Fragment>
      <div className="comment-action-1">
        <div className="btn">
          <button
            disabled={disable}
            className="btn-plus"
            onClick={() => handleVote("up")}
          >
            <Plus />
          </button>
          <span className="btn-text btn-score">{count}</span>
          {count === 0 ? null : (
            <button
              className="btn-minus"
              disabled={disable}
              onClick={() => handleVote("down")}
            >
              <Minus />
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScoreCounter;
