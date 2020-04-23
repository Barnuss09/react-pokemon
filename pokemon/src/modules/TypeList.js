import React from "react";

const TypeList = (props) => {
  return (
    <React.Fragment>
      {props.types.map((type) => (
        <p>{type.name}</p>
      ))}
    </React.Fragment>
  );
};

export default TypeList;
