import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.data = "";
    this.state = {
      name: "",
      description: "",
      skill: "react",
      data: ""
    };
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleSkill = e => {
    this.setState({
      skill: e.target.value
    });
  };

  showData = e => {
    e.preventDefault();

    this.setState({
      data: <h1>{JSON.stringify(this.state)}</h1>
    });
  };

  render() {
    const { name, description, skill, data } = this.state;
    return (
      <div>
        <form onSubmit={this.showData}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={this.handleName} />
          </div>
          <div>
            <label>Description</label>
            <textarea value={description} onChange={this.handleDescription} />
          </div>
          <div>
            <label>Skill</label>
            <select value={skill} onChange={this.handleSkill}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        {data && `${name} ${description} ${skill}`}
      </div>
    );
  }
}
