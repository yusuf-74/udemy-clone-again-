import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import LoadingBar from "./LoadingBar";
import { Rating } from "@mui/material";
library.add(faStar);
function FeedBack(props) {
  
  let right = [];
  let bars = [];
  const percentages = ["43%", "37%", "15%", "3%", "2%"];
  for (let i = 1; i < 6; i++)
    right[i] = (
      <div key={i} className="rate-division star">
        <div>
          {
          <Rating
            name="read-only"
            value={Math.round(6-i)}
            precision={0.5}
            readOnly
          />
        }
          </div>
          <div>
            {percentages[i-1]}
          </div>
        
      </div>
    );
  
  
  for (let i = 0; i < 5; i++) {
    bars[i] = <LoadingBar key={i} percentage={percentages[i]} />;
  }

  return (
    <>
      <h2>Students feedback</h2>
      <div className="feedback-container">
        <div className="left-side-rate">
          <div className="rate-of-left-side">4.4</div>
          <div>
            <Rating
              name="read-only"
              value={Math.round(4.4 * 10) / 10}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="left-side-title">Course Rating</div>
        </div>
        <div className="middle-side-rate">{bars}</div>
        <div className="right-side-rate">{right}</div>
      </div>
    </>
  );
}

export default FeedBack;
