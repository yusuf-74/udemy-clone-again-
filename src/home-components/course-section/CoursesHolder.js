import React from "react";
import { useRecoilState } from "recoil";
import useFetch from "../../general-components/useFetch";
import searchInput from "../../shared-states/searchInput";
import typeState from "../../shared-states/taps";
import NavBarBtn from "../servantcomponent/NavBarBtn";
import CourseCard from "./CourseCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom"

function CoursesHolder(props) {
  const [Key, setKey] = useRecoilState(searchInput);
  const [type, setType] = useRecoilState(typeState);
  const { error, isPending, data } = useFetch(`http://localhost:3000/data`);
  let courses, title, description;
  if (!isPending) {
    title = data[type].sectionTitle;
    description = data[type].courseDesc;
    const filterd = data[type].courses.filter((obj) => {
      if (Key === "") {
        return 1;
      } else {
           return obj["title"].toLowerCase().indexOf(Key.toLowerCase()) !== -1;
      }
    });
    courses = filterd.map((el,idx) => {
      return (
        <Link key={el.id} to={`/${el.id}/${idx}`}>
          <CourseCard courseInfo={el} />
        </Link>
      );
    });
  }
  
  const waiting = (
    <>
      <Skeleton
        animation="wave"
        height="64px"
        width="30%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="16px"
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="16px"
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="16px"
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="16px"
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="16px"
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        height="40px"
        width="80px"
        style={{ marginBottom: 24 }}
      />
      <div className="waiting-cards">
        <Skeleton variant="rectangular" animation="wave" width="240px" height="260px"  style={{ marginRight: 24 }}/>
        <Skeleton variant="rectangular" animation="wave" width="240px" height="260px"  style={{ marginRight: 24 }}/>
        <Skeleton variant="rectangular" animation="wave" width="240px" height="260px"  style={{ marginRight: 24 }}/>
        <Skeleton variant="rectangular" animation="wave" width="240px" height="260px"  style={{ marginRight: 24 }}/>
        <Skeleton variant="rectangular" animation="wave" width="240px" height="260px"  style={{ marginRight: 24 }}/>
      </div>
    </>
  );
   const content = (
     <>
       <header className="courses-section-headline">
         <div className="specilization-description">
           <h1>{title}</h1>
           <p>{description}</p>
         </div>
         <NavBarBtn title="Explore" type="nav-bar-btn-2 explore-btn" />
       </header>
       {<div className="courses-holder">{courses}</div>}
     </>
   );
  return (
    <section className="courses-container">
      {isPending ? waiting : content}
    </section>
  );
}

export default CoursesHolder;
