import React from "react";
import DotPoint from "./Subsections";
import RenderTextInput from "./RenderTextInput";

function RenderCard(props) {
  const { sectionName, cardList, changeCard, addCard, removeCard } = props.card;
  const { subsecName, dpList, changeDP, addDP, removeDP } = props.dp;

  return (
    <React.Fragment>
      {Object.keys(cardList).map((key) => (
        <div
          className={`${sectionName}--block card--block`}
          key={`${sectionName}_${key}`}
          data-name={`${sectionName}_${key}`}
          data-prim-num={key}
        >
          <RenderTextInput
            passedObj={cardList[key]}
            handler={changeCard}
            index={key}

          />
          <DotPoint
            cardIndex={key}
            subsection={subsecName}
            dotptList={dpList}
            addHandler={addDP}
            removeHandler={removeDP}
            changeHandler={changeDP}
          />
          <button type="button" onClick={removeCard}>
            Remove {`${sectionName}`}
          </button>
        </div>
      ))}
      <button type="button" onClick={addCard}>
        Add Work
      </button>
    </React.Fragment>
  );
}

export default RenderCard;
