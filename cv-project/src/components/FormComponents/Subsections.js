import React from "react";

function DotPoint(props) {
  const {
    cardIndex,
    subsection,
    dotptList,
    addHandler,
    removeHandler,
    changeHandler,
  } = props;

  const hoverRemoveStyle = (e) => {
    const textarea = e.target.previousElementSibling;
    textarea.classList.remove("form--subsection");
    textarea.classList.remove("form--subsection");
  };

  const selectSubsection = (cardIndex, key) => {
    const [leadingCardNum, subNum] = key.split("_");
    if (cardIndex === leadingCardNum) {
      return (
        <div className="form--subsection-div" key={`${subsection}_${key}`}>
          <textarea
            className="form--subsection"
            placeholder={dotptList[key].placeholder}
            value={dotptList[key].value}
            onChange={changeHandler}
            name={`${subsection}_${key}`}
            data-prim-num={cardIndex}
            data-sub-num={subNum}
          />
          <button
            className="form--subsection--removeB removeB"
            type="button"
            onClick={removeHandler}
            data-prim-num={cardIndex}
            data-sub-num={subNum}
          >
            X
          </button>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      {Object.keys(dotptList).map((key) => selectSubsection(cardIndex, key))}
      <button
        className="form--subsection--addB"
        type="button"
        onClick={addHandler}
        data-prim-num={cardIndex}
      >
        Add {subsection}
      </button>
    </React.Fragment>
  );
}

export default DotPoint;
