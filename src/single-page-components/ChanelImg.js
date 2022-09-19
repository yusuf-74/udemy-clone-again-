import React from 'react'

function ChanelImg(props) {
  return (
    <div className="chanel-img-container">
      <img className="chanel-img" src={props.data.image} alt="chanel img" />
    </div>
  );
}

export default ChanelImg