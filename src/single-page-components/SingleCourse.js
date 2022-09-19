import React from 'react'
import ContentSection from './ContentSection';
import SingleHeader from './SingleHeader'
import Chanel from "./Chanel"
import FeedBack from "./FeedBack"
import Reviews from "./Reviews"

function SingleCourse() {
  
  const attributes = {
    image: "https://img-c.udemycdn.com/user/200_H/52310762_220a.jpg",
    title: "The Codex",
    description: "Teaching Python through Projects",
    rate: "4.4",
    reviews: "73,767",
    students: "890,984",
    courses: "16",
    about:
      "You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to build fun, practical projects. Now, you can stand out from the crowd and land your dream job.",
  };
  return (
    <>
      <SingleHeader />
      <div className='main-content'>
        <ContentSection />
        <Chanel data = {attributes}/>
        <FeedBack />
        <Reviews/>
      </div>
      
    </>
  );
}

export default SingleCourse