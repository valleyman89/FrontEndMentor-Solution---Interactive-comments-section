import React, { useState } from "react";
import { ReactComponent as Plus } from "../svg/icon-plus.svg";
import { ReactComponent as Minus } from "../svg/icon-minus.svg";

function ScoreCounter(props) {
  const [count, setState] = useState(props.score);
  return (
    <React.Fragment>
      <div className="comment-action-1">
        <div className="btn">
          <button className="btn-plus" onClick={() => setState(count + 1)}>
            <Plus />
          </button>
          <span className="btn-text btn-score">{count}</span>
          <button className="btn-minus" onClick={() => setState(count - 1)}>
            <Minus />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScoreCounter;
