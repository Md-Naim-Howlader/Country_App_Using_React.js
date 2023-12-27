import { useContext, useEffect, useState } from "react";
import "./search.css";
import { CountriesContext } from "../context/CountriesContext";

const SearchCountry = () => {
  const [searchText, setSearchText] = useState("");

  const { handleSearch } = useContext(CountriesContext);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    handleSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
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
