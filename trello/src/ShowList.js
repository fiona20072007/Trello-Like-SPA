import React from "react";
import PropTypes from "prop-types";
import ShowCard from "./ShowCard";
import EditTitle from "./EditTitle";
// import { nanoid } from "nanoid";

import "./css/ShowList.css";

function ShowList(props) {
  return (
    <div className="showList">
      <ul>
        {props.list.map(function(item, i) {
          if (item.edit === false) {
            return (
              <li key={i} id={i}>
                <span>{item.title}</span>
                <ShowCard
                  cardList={props.list[i].cardList}
                  list={props.list}
                  handleSetCard={props.handleSetCard}
                />
                <div>
                  <button onClick={() => props.handleEdit(i)}>
                    + Add a card
                  </button>
                </div>
                <EditTitle
                  listId={i}
                  list={props.list}
                  handleTitleChange={props.handleTitleChange}
                  editTitleValue={props.editTitleValue}
                  handleDelete={props.handleDelete}
                  handleEditTitle={props.handleEditTitle}
                  handleSave={props.handleSave}
                  handleTitleChange={props.handleTitleChange}
                />
              </li>
            );
          } else {
            return (
              <li key={i} id={i}>
                <span>{item.title}</span>
                <ShowCard
                  cardList={props.list[i].cardList}
                  list={props.list}
                  handleSetCard={props.handleSetCard}
                  listId={i}
                />
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    props.handleCardSubmit(i);
                  }}
                >
                  <label>
                    <input
                      type="text"
                      value={props.editValue}
                      onChange={props.handleChange1}
                    />
                  </label>
                  <button type="submit">Add card</button>
                  <button onClick={() => props.handleCardCancel(i)}>X</button>
                </form>
                <EditTitle
                  listId={i}
                  list={props.list}
                  handleTitleChange={props.handleTitleChange}
                  editTitleValue={props.editTitleValue}
                  handleDelete={props.handleDelete}
                  handleEditTitle={props.handleEditTitle}
                  handleSave={props.handleSave}
                  handleTitleChange={props.handleTitleChange}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

ShowList.propTypes = {
  list: PropTypes.array,
  handleCheck: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  editValue: PropTypes.string,
  handleSave: PropTypes.func,
  handleChange1: PropTypes.func,
  handleCardSubmit: PropTypes.func
};

export default ShowList;
