import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlay,
    faComment,
    faStar,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ChanelImg from "./ChanelImg";
library.add(faStar, faUserGroup, faCirclePlay, faComment);


function Chanel(props) {
    const icons = ["fa-solid fa-star","fa-solid fa-comment","fa-solid fa-user-group","fa-solid fa-circle-play"]
    const type = ["Instructor Rating","Reviews","Students","Courses"]
    const info =[props.data.rate , props.data.reviews,props.data.students,props.data.courses]
    let chanelInfo = []
    for(let i = 0 ; i < 4 ; i++)
    {
        chanelInfo[i] = (
          <div key = {i} className="info-holder">
            <FontAwesomeIcon icon={icons[i]} />
            <span> {info[i]} {type[i]}</span>
          </div>
        );
    } 

    return (
      <>
        <div className="chanel-container">
          <div className="chanel-title">
            <a href="/">
              <h4>{props.data.title}</h4>
            </a>
            <p>{props.data.description}</p>
          </div>
          <div className="chanel-info-ccontainer">
            <ChanelImg data={props.data}/>
            <div className="chanel-info">
             {chanelInfo}
            </div>
          </div>

          <div className="about-chanel">
            <p>{props.data.about}</p>
          </div>
        </div>
      </>
    );
}

export default Chanel;
