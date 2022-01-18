import React from "react";

function ViewRender(props) {
  const { title, sectionList, subsectionList, int, detail } = props;

  const conditionalDate = (key) => {
    const start = key.start.value;
    const end = key.end.value;
    if (start && start !== "" && end && end !== "") {
      return " to ";
    } else {
      return "";
    }
  };

  const selectSubs = (list, key, subKey) => {
    const primary = subKey.split("_")[0];
    if (primary === key) {
      return renderDP(list, key, subKey);
    }
  };

  const renderDP = (subsectionList, key, subKey) => {
    // we find the number of dotpoints, if only one, use paragraph instead
    const currSectionSubKeys = Object.keys(subsectionList).filter(
      (sub) => sub.split("_")[0] === key
    );
    const DPcount = currSectionSubKeys.length;
    if (DPcount === 1) {
      return <p className="view--subsection">{subsectionList[subKey].value}</p>;
    } else if (
      currSectionSubKeys
        .map(
          (subkey) =>
            subsectionList[subkey].value === undefined ||
            subsectionList[subkey].value === ""
        )
        .every((e) => e === true)
    ) {
      return null;
    } else {
      return (
        <ul>
          <li className="view--subsection">{subsectionList[subKey].value}</li>
        </ul>
      );
    }
  };

  const conditionalSection = (key) => {
    if (
      sectionList[key][int].value !== undefined &&
      sectionList[key][int].value !== ""
    ) {
      return (
        <div className="view--section">
          <div className="view--titleBlock">
            <div>
              <span className="view--section">
                {sectionList[key][int].value}
              </span>
              {", "}
              <span className="view--section">
                {sectionList[key][detail].value}
              </span>
            </div>
            <div>
              <span>{sectionList[key].start.value} </span>
              {conditionalDate(sectionList[key])}
              <span>{sectionList[key].end.value} </span>
            </div>
          </div>
          {Object.keys(subsectionList).map((subKey) =>
            selectSubs(subsectionList, key, subKey)
          )}
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <hr />
      {Object.keys(sectionList).map((key) =>
        conditionalSection(key)
      )}
    </React.Fragment>
  );
}

export default ViewRender;
