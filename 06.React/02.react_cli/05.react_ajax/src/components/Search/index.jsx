import React, { Component } from "react";
// impt
import PubSub from "pubsub-js";

export default class Search extends Component {

  state = {
    searchName: ""
  };

  handleChange = e => {
    this.setState({
      searchName: e.target.value.trim()
    });
  };

  search = () => {
    const { searchName } = this.state;
    // 发布消息的名称必须和订阅消息一样
    PubSub.publish("SEARCH_NAME", searchName);
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
