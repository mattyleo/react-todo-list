import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoItems extends Component {
  render() {
    return (
      <section>
        <h2>todo list </h2>
        <Item />
      </section>
    );
  }
}
