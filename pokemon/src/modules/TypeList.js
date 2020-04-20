import React, { Component } from "react";

export class TypeList extends Component {
  render() {
    return this.props.types.map((type) => (
      <React.Fragment>
        <p>{type.name}</p>
      </React.Fragment>
    ));
  }
}

export default TypeList;
