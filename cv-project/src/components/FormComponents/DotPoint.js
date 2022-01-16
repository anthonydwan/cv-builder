import React from "react";

function DotPoint(props) {
  const { dotptList, addHandler, removeHandler, changeHandler } = props;

  return (
    <React.Fragment>
      {Object.keys(dotptList).map((key) => (
        <div key={`Resp_${key}`}>
          <textarea
            placeholder={dotptList[key].placeholder}
            value={dotptList[key].value}
            onChange={changeHandler}
            name={`Resp_${key}`}
          />
          <button type="button" onClick={removeHandler}>
            Remove Responsibility
          </button>
        </div>
      ))}
      <button type="button" onClick={addHandler}>
        Add Responsibility
      </button>
    </React.Fragment>
  );
}

export default DotPoint;
