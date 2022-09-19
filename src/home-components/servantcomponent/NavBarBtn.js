import React from 'react'

function NavBarBtn(props) {
  return (
    <>
      <a href="/">
        <div className={props.type}>
            {props.title}
        </div>
      </a>
    </>
  );
}

export default NavBarBtn