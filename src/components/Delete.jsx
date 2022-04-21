import React, { Component } from "react";
import { ReactComponent as IconDelete } from "../svg/icon-delete.svg";
class Delete extends Component {
  render() {
    return (
      <button className="action delete comment-action-2">
        <IconDelete /> Delete
      </button>
    );
  }
}

export default Delete;
