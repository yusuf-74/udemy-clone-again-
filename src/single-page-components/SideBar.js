import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faPlayCircle,
  faFile,
  faFileArrowDown,
  faInfinity,
  faMobileScreenButton,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faStar,
  faHeart,
  faPlayCircle,
  faFile,
  faFileArrowDown,
  faInfinity,
  faMobileScreenButton,
  faMedal
);
function SideBar({ data }) {
  const [x, setX] = useState(true);

  const sideBarAttr = {
    title: data != undefined ? data["title"] : "Title",
    students: "1,182",
    rate: data != undefined ? data["rating"].toFixed(1) : "Rate",
    ratings: data != undefined ? data["people"].slice(1) : "people ratings",
    image: data != undefined ? data["image"] : "Image",
    price: data != undefined ? data["price"] : "Price",
  };

  window.onscroll = (e) => {
    if (window.scrollY > 400 && window.innerWidth > 1272.73) setX(false);
    if (window.scrollY < 400) setX(true);
  };
  window.onresize = (e) => {
    if (window.innerWidth < 1272.73) setX(true);
  };
  return (
    <>
      <div className="side-bar-container">
        <img
          src={sideBarAttr.image}
          alt="Course img"
          className="photo"
          style={{ display: x ? "block" : "none" }}
        ></img>
        <div
          className="child"
          style={{
            position: !x ? "fixed" : null,
            width: !x ? "25%" : null,
            top: !x ? "10px" : null,
            zIndex: "3000",
          }}
        >
          <h2 className="price">E£{sideBarAttr.price}</h2>
          <button className="add-to-cart">Add to cart</button>
          <button className="heart">
            <FontAwesomeIcon icon="fa-heart" size="xl" />
          </button>
          <button className="buy">Buy now</button>
          <div className="money-back">30-Day Money-Back Guarantee</div>

          <div className="include">
            <h6>This course includes:</h6>
            <ul>
              <li className="listDesc">
                <FontAwesomeIcon icon="fa-play-circle" />
                &nbsp; &nbsp;19 hours on-demand video{" "}
              </li>
              <br></br>

              <li className="listDesc">
                <FontAwesomeIcon icon="fa-file" />
                &nbsp; &nbsp;3 articles
              </li>
              <br></br>

              <li className="listDesc">
                <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" /> &nbsp;
                &nbsp;72 downloadable resources{" "}
              </li>
              <br></br>

              <li className="listDesc">
                <FontAwesomeIcon icon="fa-solid fa-infinity" /> &nbsp;
                &nbsp;Full lifetime access{" "}
              </li>
              <br></br>

              <li className="listDesc">
                <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
                &nbsp; &nbsp;Access on mobile and TV{" "}
              </li>
              <br></br>

              <li className="listDesc">
                <FontAwesomeIcon icon="fa-solid fa-medal" />
                &nbsp; &nbsp;Certificate of completion{" "}
              </li>
            </ul>
          </div>
          <div className="share-gift-apply">
            <div className="share">Share</div>
            <div className="share"> Gift this course</div>
            <div className="share"> Apply Coupon </div>
          </div>
          <hr></hr>
          <h5 className="train">Training 5 or more people?</h5>
          <p className="get">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
          <button className="try">Try Udemy Business</button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
