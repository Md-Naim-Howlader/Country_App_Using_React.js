import Country from "./Country";
import { ErrorMesssge } from "../components/Error/Error";
import { LoadingMesssge } from "../components/Loading/Loading";
import style from "./countries.module.css";
import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
const Countries = () => {
  const { isError, isLoading, filterdCountries, handleRemoveCountry } =
    useContext(CountriesContext);

  return (
    <>
      {isLoading && <LoadingMesssge messageName="Countries" />}
      {isError && <ErrorMesssge />}

      <div>
        {filterdCountries.length > 0 ? (
          <div className={style.countries}>
            {filterdCountries.map((country) => {
              return (
                <Country
                  handleRemoveCountry={handleRemoveCountry}
                  key={country.name.common}
                  country={country}
                />
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "block",
            }}
          >
            <h2 style={{ color: "red" }}> Not Found country!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Countries;
