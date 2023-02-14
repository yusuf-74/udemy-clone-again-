import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ReviewCard from "./ReviewCard";
import SearchBar from "./SearchBar";
import useFetch from "../general-components/useFetch";

library.add(faMagnifyingGlass);
function Reviews() {
 const { error, isPending, data } = useFetch(
   `http://localhost:3000/reviews`
 );
  let reviews = [];
  if(!isPending)
  {
    
    for (let i = 2; i < 10; i++) {
    reviews.push(
      <ReviewCard
        key={i}
        name={data[(i % 4) + 2].user.display_name}
        review={data[(i % 4) + 2].content}
        rate={data[(i % 4) + 2].rating}
        date="long time ago"
      />
    );
  }
  }
  

  return (
    <div className="reviews-container" id="reviews">
      <div className="reviews-title">Reviews</div>
      <div className="secondary-container-single">
        <SearchBar />
        <div className="rating-based-filter">
          <select className="reviews-filter">
            <option value="">All ratings</option>
            <option value="5">five stars</option>
            <option value="4">four stars</option>
            <option value="3">three stars</option>
            <option value="2">two stars</option>
            <option value="1">one star</option>
          </select>
        </div>
      </div>
      <div className="all-reviews">{reviews}</div>
    </div>
  );
}

export default Reviews;
