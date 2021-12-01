import React, { Component } from "react";

export default class Front extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
};