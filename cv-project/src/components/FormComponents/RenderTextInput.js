import React from "react";

function RenderTextInput(props) {
  const { index, passedObj, handler } = props;

  return (
    <React.Fragment>
      {Object.keys(passedObj).map((category) => {
        return (
          <input
            className={passedObj[category].className}
            type="text"
            key={`${category}_${index}`}
            name={`${category}_${index}`}
            onChange={handler}
            value={passedObj[category].value}
            placeholder={passedObj[category].placeholder}
            data-prim-num={index}
          ></input>
        );
      })}
    </React.Fragment>
  );
}

export default RenderTextInput;
