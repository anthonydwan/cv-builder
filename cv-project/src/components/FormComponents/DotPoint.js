import React from "react";

function DotPoint(props) {
  const { subsection, dotptList, addHandler, removeHandler, changeHandler } =
    props;

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
            Remove {subsection}
          </button>
        </div>
      ))}
      <button type="button" onClick={addHandler}>
        Add {subsection}
      </button>
    </React.Fragment>
  );
}

export default DotPoint;
