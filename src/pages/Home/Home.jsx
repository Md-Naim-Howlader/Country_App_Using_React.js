import "./home.css";
import Countries from "./../../components/Countries";
import SearchCountry from "../../components/SearchCountry";
import useFetch from "../../Hooks/useFetch";
import { CountriesContext } from "../../context/CountriesContext";
const Home = () => {
  const {
    handleRemoveCountry,
    handleSearch,
    isError,
    isLoading,
    filterdCountries,
  } = useFetch("https:restcountries.com/v3.1/all");

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      <CountriesContext.Provider
        value={{
          filterdCountries,
          handleRemoveCountry,
          handleSearch,
          isError,
          isLoading,
        }}
      >
        <div>
          <SearchCountry />
          <Countries />
        </div>
      </CountriesContext.Provider>
    </div>
  );
};

export default Home;
