import React from 'react'

function Avatar(props) {
  return (
    <div className="reviewer-avatar">
      <div>
        {props.name[0]}
        {props.name[1]}
      </div>
    </div>
  );
}

export default Avatar