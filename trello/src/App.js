import React from "react";

import AddList from "./AddList";
// import FilterList from "./FilterList";
import ShowList from "./ShowList";
import { nanoid } from "nanoid";

// import styles from "./css/App.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: false,
      value: "",
      editValue: "",
      editTitleValue: "",
      list: [],
      showList: []
    };
  }

  handleAddTitle = () => {
    if (this.state.titleInput === false) {
      this.setState({ titleInput: true });
    } else {
      this.setState({ titleInput: false });
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChange1 = event => {
    this.setState({ editValue: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ editTitleValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.setState({
        value: "",
        list: [
          ...this.state.list,
          {
            title: this.state.value,
            cardList: [],
            edit: false,
            editTitle: false
          }
        ]
      });
    } else {
      console.log(111);
    }
    console.log(this.state.list);
  };

  handleEdit = i => {
    let newList2 = this.state.list;
    newList2[i].edit = true;
    this.setState({
      list: newList2
    });
  };

  handleEditTitle = i => {
    let newList6 = this.state.list;
    if (newList6[i].editTitle === false) {
      newList6[i].editTitle = true;
    } else {
      newList6[i].editTitle = false;
    }
    this.setState({
      list: newList6
    });
  };

  handleCardCancel = i => {
    let newList3 = this.state.list;
    newList3[i].edit = false;
    this.setState({
      list: newList3
    });
  };

  handleCardSubmit = i => {
    if (this.state.editValue !== "") {
      let newList3 = this.state.list;
      newList3[i].cardList.push({
        title: this.state.editValue,
        id: "id" + nanoid()
      });
      this.setState({
        editValue: "",
        list: newList3
      });
    } else {
      console.log(222);
    }
    console.log(this.state.list);
  };

  handleDelete = i => {
    let newList4 = this.state.list;
    newList4.splice(i, 1);
    this.setState({
      list: newList4
    });
  };

  handleSetCard = (arr, i) => {
    let newList5 = this.state.list;
    newList5[i].cardList = arr;
    this.setState({
      list: newList5
    });
    console.log("state", this.state);
  };

  handleSave = (i, val) => {
    let newList5 = this.state.list;
    newList5[i].editTitle = false;
    newList5[i].title = val;
    this.setState({
      list: newList5,
      editTitleValue: ""
    });
  };

  render() {
    return (
      <div>
        <AddList
          titleInput={this.state.titleInput}
          handleAddTitle={this.handleAddTitle}
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ShowList
          list={this.state.list}
          handleCheck={this.handleCheck}
          editValue={this.state.editValue}
          handleCardSubmit={this.handleCardSubmit}
          handleChange1={this.handleChange1}
          handleEdit={this.handleEdit}
          handleCardCancel={this.handleCardCancel}
          handleSetCard={this.handleSetCard}
          handleDelete={this.handleDelete}
          handleTitleChange={this.handleTitleChange}
          editTitleValue={this.state.editTitleValue}
          handleEditTitle={this.handleEditTitle}
          handleTitleSubmit={this.handleTitleSubmit}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default App;
