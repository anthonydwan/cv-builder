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

  const selectSubsection = (cardIndex, key) => {
    const [leadingCardNum, subNum] = key.split("_");
    if (cardIndex === leadingCardNum) {
      return (
        <div key={`${subsection}_${key}`}>
          <textarea
            placeholder={dotptList[key].placeholder}
            value={dotptList[key].value}
            onChange={changeHandler}
            name={`${subsection}_${key}`}
            data-prim-num={cardIndex}
            data-sub-num={subNum}
          />
          <button
            type="button"
            onClick={removeHandler}
            data-prim-num={cardIndex}
            data-sub-num={subNum}
          >
            Remove {subsection}
          </button>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      {Object.keys(dotptList).map((key) => selectSubsection(cardIndex, key))}
      <button type="button" onClick={addHandler} data-prim-num={cardIndex}>
        Add {subsection}
      </button>
    </React.Fragment>
  );
}

export default DotPoint;
