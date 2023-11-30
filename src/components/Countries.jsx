import Country from "./Country";
import { ErrorMesssge } from "../components/Error/Error";
import { LoadingMesssge } from "../components/Loading/Loading";
import style from "./countries.module.css";
import useFetch from "../Hooks/useFetch";
import { CountriesContext } from "../context/CountriesContext";
const Countries = () => {
  const { countries, setCountries, isError, isLoading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      {isLoading && <LoadingMesssge messageName="Countries" />}
      {isError && <ErrorMesssge />}
      <CountriesContext.Provider value={{ countries, setCountries }}>
        <div className={style.countries}>
          {countries.map((country) => {
            return <Country key={country.name.common} country={country} />;
          })}
        </div>
      </CountriesContext.Provider>
    </>
  );
};

export default Countries;
