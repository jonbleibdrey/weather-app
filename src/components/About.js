import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import axios from "axios";
import "../css/about.css"
require("dotenv").config();

const About = ({ weatherIcon, popUp }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [err, setErr] = useState(false);

  // search function in about section
  function handleSubmit(evt) {
    const apiKey = process.env.REACT_APP_API_KEY;
    evt.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`
      )
      .then((res) => setSearchResult(res.data), setErr(false))

      .catch((error) => setErr(true));
    setSearch("");
  }

  const showSearchBar = () => {
    setToggleSearch(!toggleSearch);
  };

  const clear = () => {
    showSearchBar();
    setSearchResult("");
  };

  return (
    <div className="about-container">
      <Logo showSearchBar={showSearchBar} clear={clear} />
      <div className="about-header" >
        <h2>
          Welcome to LOOK-UP™ a site for weather
          <hr className="about-hr" />
        </h2>
        <br />
        <h5>
          If you allow location to find you! It will give you your weather,
          plain, and simple.
        </h5>
        <br />
        <p>
          <strong>This is how it works: </strong> Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nemo recusandae cum repellendus sapiente
          accusamus! Eius sit voluptas voluptatem velit dolorum, quae
          perferendis consequatur quia temporibus possimus? In voluptate veniam
          ratione!
        </p>
      </div>
      {popUp ? (
        <div className="pop-up">
          {popUp}
        </div>
      ) : (
        <div>
        {/* {empty} */}
        </div>
      )}

      <div className="about-searchBar">
        <SearchBar
          toggleSearch={toggleSearch}
          weatherIcon={weatherIcon}
          searchResult={searchResult}
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
          err={err}
          clear={clear}
        />
      </div>
    </div>
  );
};

export default About;
