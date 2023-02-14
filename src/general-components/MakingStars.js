import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as sol } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
library.add(faStar , sol)
function MakingStars(props) {
    let i
    let stars = []
    
      for (i = 1; i < props.rate; i++) {
        stars[i] = (
          <span key={i}>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </span>
        );
      }
      for (; i <= 5; i++)
        stars[i] = (
          <span key={i}>
            <FontAwesomeIcon icon="fa-regular fa-star" />
          </span>
        );
    
    
  return (
    <div className="course-rate">
      <div>{stars}</div> <div>{Math.round(props.rate * 100) / 100}</div>
    </div>
  );
}

export default MakingStars