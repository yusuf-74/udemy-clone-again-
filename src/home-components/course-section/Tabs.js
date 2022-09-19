import React, { useState } from "react";
import { useRecoilState } from "recoil";
import typeState from "../../shared-states/taps";

function Tabs() {
  const [type, setType] = useRecoilState(typeState);
  const tabs = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data science",
    "AWS Certification",
    "Drawing",
  ];
  const tabsHolder = document.querySelectorAll(".tabs-nav");
  const onClickHandler = (e, index) => {
    setType(index);
    for(let i = 0 ;i < tabsHolder.length ;i++)
    tabsHolder[i].style.color="gray"
    e.target.style.color="black"
  };
  let view = [];

  view = tabs.map((el, i) => {
    return (
      <div
        key={i}
        className="tabs-nav"
        onClick={(e) => {
          return onClickHandler(e, i);
        }}
      >
        {el}
      </div>
    );
  });


  return (
    <>
      <div className="tabs-container">{view}</div>
    </>
  );
}

export default Tabs;
