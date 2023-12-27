import Country from "./Country";
import { ErrorMesssge } from "../components/Error/Error";
import { LoadingMesssge } from "../components/Loading/Loading";
import style from "./countries.module.css";
import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import errorImg from "../assets/images/404Error.gif";
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
            <img style={{ width: "400px" }} src={errorImg} alt="error image" />
            <h2 style={{ color: "red" }}>
              {" "}
              <b>Error:</b> Country Not Found! Enter Valid Name again.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Countries;
