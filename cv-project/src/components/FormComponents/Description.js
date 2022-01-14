import React, { Component } from "react";

export class Description extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "A short description about yourself",
      text: "A software developer who is passionate about delivering the highest quality work and is always looking to improve, adapt and innovate.",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          placeholder={this.state.placeholder}
          value={this.state.text}
        ></textarea>
      </div>
    );
  }
}

export default Description;
