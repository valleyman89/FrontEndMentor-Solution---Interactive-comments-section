import React from "react";

function input(props) {
  return (
    <div>
      <textarea
        ref={props.formRef}
        className="input"
        defaultValue={props.value}
        placeholder="Add a comment..."
      ></textarea>
    </div>
  );
}

export default input;
