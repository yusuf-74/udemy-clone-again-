import { Skeleton } from '@mui/material';
import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react'
import useFetch from '../general-components/useFetch';

function MainHeader() {
  return (
    <>
      <div className="header-img">
        <img
          className="header-photo"
          src={require("../design-element/mainheaderphoto.jpg")}
          alt="motivating pic"
        />
        <div className="header-card-pop header-card">
          <h1>Learning that gets you</h1>
          <p>Skills for your present and your future. Get started with us.</p>
        </div>
      </div>
    </>
  );
}

export default MainHeader