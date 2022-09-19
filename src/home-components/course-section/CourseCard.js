import React from 'react'
import MakingStars from '../../general-components/MakingStars';
import Popover from '../servantcomponent/PopOver';
import Tippy from "@tippyjs/react";
import { useState } from 'react';

function CourseCard(props) {
  const [arrow, setArrow] = useState(null);

  return (
    <>
      <Tippy
        arrow
        interactive={true}
        content={
          <Popover
            data={props.courseInfo["popData"]}
            title={props.courseInfo["title"]}
          />
        }
        hideDelay={0}
        distance={20}
        duration={0}
        hideDuration={0}
        placement="right"
      >
        <div className="card-container">
          <img
            className="course-photo"
            alt="course pic"
            src={props.courseInfo.image}
          />
          <div className="course-title">{props.courseInfo.title}</div>
          <div className="course-author">{props.courseInfo.author.name}</div>
          <div className="course-rate">
            <MakingStars rate={props.courseInfo.rating} />
          </div>
          <div className="course-price">{props.courseInfo.price} $</div>
        </div>
      </Tippy>
    </>
  );
}

export default CourseCard