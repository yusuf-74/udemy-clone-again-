import React from "react";
import useFetch from "../general-components/useFetch";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import typeState from "../shared-states/taps";
import { Rating } from "@mui/material";
function SingleHeader() {
  const [type, setType] = useRecoilState(typeState);
   const id = useParams();
   console.log(id)
  const { error, isPending, data } = useFetch(`http://localhost:3000/data`);
  let headerData;
  if (!isPending) {
    headerData = (
      <>
        <div className="single-header-title">{data[type].courses[id.idx].title}</div>
        <div className="single-header-description">
          {data[type].courses[id.idx].headline}
        </div>
        <div className="single-header-rate">
          <div>{Math.round(data[type].courses[id.idx].rating * 10) / 10}</div>
          <div className="single-header-stars">
            <Rating
              name="read-only"
              value={Math.round(data[type].courses[id.idx].rating * 10) / 10}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div>19,799 Students</div>
        </div>
        <div className="single-createdby">
          Created by {data[type].courses[id.idx].author[0].name}
        </div>
      </>
    );
  }

  return (
    <header className="single-header">
      <div className="single-main-content-header">{headerData}</div>
    </header>
  );
}

export default SingleHeader;
