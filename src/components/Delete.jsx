import React, { Component } from "react";
import { ReactComponent as IconDelete } from "../svg/icon-delete.svg";
class Delete extends Component {
  render() {
    return (
      <button className="action action__delete comment-action-2">
        <IconDelete /> Delete
      </button>
    );
  }
}

export default Delete;
