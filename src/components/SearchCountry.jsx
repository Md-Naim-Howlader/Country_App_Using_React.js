import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../context/CountriesContext";
import "./search.css";
const SearchCountry = ({ onSearchCountry }) => {
  const [searchText, setSearchText] = useState("");

  const { handleSearch } = useContext(CountriesContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    handleSearch(searchText);
  }, [handleSearch, searchText]);
  return (
    <div className="search">
      <input
        style={{ padding: "7px 5px" }}
        onChange={handleChange}
        value={searchText}
        type="text"
        name="search"
        id="search"
        placeholder="Search Countries..."
      />
    </div>
  );
};

export default SearchCountry;
