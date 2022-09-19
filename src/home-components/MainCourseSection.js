import React from "react";
import CoursesHolder from "./course-section/CoursesHolder";
import Tabs from "./course-section/Tabs";

function MainCourseSection(props) {
  return (
    <div className="secondary-container">
      <h1>A broad selection of courses</h1>
      <p>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      
      <Tabs />
      <CoursesHolder />
    </div>
  );
}

export default MainCourseSection;
