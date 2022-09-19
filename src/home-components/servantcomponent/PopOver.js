import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart , faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

library.add(faHeart,faCheck)

function Popover(props) {
  let data = props.data;
  
    let view = data.list.map((e, index) => {
      return (
        <div key={index} className="pop-list-item">
          <FontAwesomeIcon icon="fa-solid fa-check" />
          <div className="pop-list-content">{e}</div>
        </div>
      );
    });
  return (
    <div className="pop-div">
      <h3 className="pop-title">{props.title}</h3>
      <div className="under-title">
        <p className="pop-date">
          <span className="none-font">Updated </span>
          {data.date}
        </p>
        <p className="pop-hours">{data.hours}</p>
      </div>
      <p className="pop-description">{data.descrip}</p>
      <div className="pop-list">{view}</div>
      <div className="add-to-chart">
        <button className="pop-button">Add to cart</button>
        <div className="add-to-faiv-button">
          <FontAwesomeIcon icon="fa-solid fa-heart" size="xl"/>
        </div>
      </div>
    </div>
  );
}

export default Popover;
