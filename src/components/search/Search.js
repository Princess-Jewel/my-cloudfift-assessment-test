import React from "react";
import Map from "../assets/images/map pin.svg";
import SearchIcon from "../assets/images/search.svg";
import "./Search.scss";

const Search = () => {
  return (
    <div>
      <form>
        <div className='input__wrapper'>
          <div className='keywords'>
            <input type='text' placeholder='Enter keywords, skill, interest' />
          </div>
          <div className='location'>
            <img src={Map} alt='' />
            <input type='text' placeholder='Location' />
          </div>
          <button type='submit' className='search'>
            <img src={SearchIcon} alt='' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
