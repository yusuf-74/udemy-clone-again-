import React from 'react'

function LoadingBar(props) {
  return (
    <div className="loading">
      <div className="loaded" style={{width : props.percentage}}></div>
    </div>
  );
}

export default LoadingBar