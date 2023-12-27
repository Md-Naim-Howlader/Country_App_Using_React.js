import "./home.css";
import Countries from "./../../components/Countries";
import SearchCountry from "../../components/SearchCountry";

import useFetch from "../../Hooks/useFetch";
import { CountriesContext } from "../../context/CountriesContext";

const Home = () => {
  const {
    handleSearch,
    handleRemoveCountry,
    isError,
    isLoading,
    filterdCountries,
  } = useFetch("https://restcountries.com/v3.1/all");

  const values = {
    handleSearch,
    handleRemoveCountry,
    isError,
    isLoading,
    filterdCountries,
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Country App</h1>

      <CountriesContext.Provider value={values}>
        <div>
          <SearchCountry />
          <Countries />
        </div>
      </CountriesContext.Provider>
    </div>
  );
};

export default Home;
