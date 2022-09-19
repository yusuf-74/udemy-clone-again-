import React from 'react'
import { Link } from "react-router-dom";
function Logo(props) {
  return (
    <Link to="/">
      <div className={props.type}>
      <img
        src={props.source}
        alt={props.alternative}
      />
    </div>
    </Link>
    
  );
}

export default Logo