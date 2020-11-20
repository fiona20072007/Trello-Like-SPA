import React from "react";
import PropTypes from "prop-types";

// import styles from "./css/AddList.module.scss";
import "./css/AddList.css";

const AddList = props => {
  if (props.titleInput === false) {
    return (
      <div className="addInputBtn">
        <button type="button" onClick={props.handleAddTitle}>
          + Add a list
        </button>
      </div>
    );
  } else {
    return (
      <div className="addInputBtn">
        <form onSubmit={props.handleSubmit}>
          <label>
            <input
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <button type="submit">Add list</button>
          <button type="button" onClick={props.handleAddTitle}>
            X
          </button>
        </form>
      </div>
    );
  }
};

AddList.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddList;
