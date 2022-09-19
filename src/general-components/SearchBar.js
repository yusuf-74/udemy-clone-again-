import React from "react";
import { FontAwesomeIcon }from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import searchInput from "../shared-states/searchInput";
import { Link } from "react-router-dom";
library.add(faMagnifyingGlass);
function SearchBar(props) {
   const [searchKey, setSearchKey] = useRecoilState(searchInput);
   let search = ""

  return (
    <div className="nav-search-element">
      <Link to="/" >
       <button className="nav-search-btn" onClick={()=>setSearchKey(search)}>
        <FontAwesomeIcon icon="magnifying-glass" />
      </button>
      </Link>
     
      <input className="nav-search-bar" type="search" placeholder={props.plaseholder} onChange={(e)=>search=e.target.value}/>
    </div>
  );
}

export default SearchBar;
