import React from 'react'
import useFetch from '../general-components/useFetch';
import ContentMaker from './ContentMaker';
import {useParams} from "react-router-dom"
function ContentSection() {
  const id = useParams()
  console.log(id)
    const { error, isPending, data } = useFetch(`http://localhost:3000/singleCourse`);
    let view , totalTimeH ,totalTimeM ,lectures,sections
   if (!isPending)
   {
    view = (<ContentMaker data={data[id.id]["curriculum_context"]["data"]["sections"]} />);
    totalTimeH = data[id.id]["curriculum_context"]["data"]["estimated_content_length_in_seconds"]/(60*60)
    totalTimeM = (data[id.id]["curriculum_context"]["data"]["estimated_content_length_in_seconds"] %(60 * 60))/60;
    lectures =
      data[id.id]["curriculum_context"]["data"][
        "num_of_published_lectures"
      ];
      sections = data[id.id]["curriculum_context"]["data"]["sections"].length;

   }
  return (
    <>
      <div className="what-you-learn">
       
          <h2>
            What you'll learn
          </h2>
          <ul className='styled-list'>
            <li>Dummy data</li>
            <li>Dummy data</li>
            <li>Dummy data</li>
          </ul>
        
      </div>
      <div className="single-content-holder">
        <h2>Course content</h2>
        <p>
          {sections} Sections : {lectures} lectures : {Math.round(totalTimeH)}h{" "}
          {Math.round(totalTimeM)}m total length
        </p>
        <p></p>
        {view}
      </div>
    </>
  );
}

export default ContentSection