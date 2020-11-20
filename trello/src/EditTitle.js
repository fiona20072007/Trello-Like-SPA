import React from "react";
// import PropTypes from "prop-types";
// import { nanoid } from "nanoid";

function EditTitle(props) {
  if (props.list[props.listId].editTitle === false) {
    return (
      <div>
        <button onClick={() => props.handleEditTitle(props.listId)}>
          Edit Title
        </button>
        <button onClick={() => props.handleDelete(props.listId)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            props.handleSave(props.listId, props.editTitleValue);
          }}
        >
          <label>
            <input
              type="text"
              value={props.editTitleValue}
              onChange={props.handleTitleChange}
            />
          </label>

          <button type="submit">Save</button>
          <button onClick={() => props.handleEditTitle(props.listId)}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditTitle;
