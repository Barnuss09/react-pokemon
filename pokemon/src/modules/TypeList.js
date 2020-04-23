import React from "react";

const TypeList = (props) => {
  return props.types.map((type) => (
    <React.Fragment>
      <p>{type.name}</p>
    </React.Fragment>
  ));
};

export default TypeList;
