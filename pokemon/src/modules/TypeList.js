import React from "react";
import Background from "./Background";

const TypeList = (props) => {
  return (
    <div>
      <Background>
        {props.types.map((type) => (
          <React.Fragment>
            <p>{type.name}</p>
          </React.Fragment>
        ))}
      </Background>
    </div>
  );
};

export default TypeList;
