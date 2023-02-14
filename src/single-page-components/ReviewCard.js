import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Avatar from "./Avatar";
library.add(faStar, faThumbsUp, faThumbsDown);

function ReviewCard(props) {
  let stars = [];
  for (let i = 0; i < props.rate; i++)
    stars[i] = (
      <span key={i}>
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </span>
    );
  return (
    <>
      <div className="review-card-container">
        <Avatar name={props.name} />
        <div className="review-content">
          <h4>{props.name}</h4>
          <div className="reviewer-rate star">
            {stars} {props.date}
          </div>
          <div className="review-text">{props.review}</div>

          <div className="helpful">
            <div className="help-title">Was this review helpful?</div>
            <button className="thumb">
              <FontAwesomeIcon
                icon="fa-regular fa-thumbs-up"
                size="lg"
                className="like"
              />
            </button>
            <button className="thumb">
              <FontAwesomeIcon
                icon="fa-regular fa-thumbs-down"
                size="lg"
                className="like"
              />
            </button>
            <a href="/">Report?</a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ReviewCard;
