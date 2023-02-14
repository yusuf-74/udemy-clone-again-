import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMagnifyingGlass);

function SearchBar() {
  return (
    <div className="search-reviews">
      <input typeof="search" placeholder="Search reviews"></input>
      <button className="search-btn">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  );
}

export default SearchBar;
