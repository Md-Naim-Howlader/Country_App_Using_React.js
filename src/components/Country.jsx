import { useContext } from "react";
import style from "./countries.module.css";
import { CountriesContext } from "../context/CountriesContext";

//end import
const Country = ({ country }) => {
  const { countries, setCountries } = useContext(CountriesContext);
  const { name, flags, area, population, languages } = country;
  let lang = "";
  for (let value in languages) {
    lang = languages[value];
  }

  // remove country
  const handleRemoveCountry = (commonName) => {
    const filterdCountries = countries.filter(
      (country) => country.name.common !== commonName
    );
    setCountries(filterdCountries);
  };
  return (
    <div className={style.country}>
      <div className={style.imageBox}>
        <img src={flags.png} alt="" />
      </div>
      <div className={style.cardBody}>
        <h2>
          Name: <span>{name.common}</span>
        </h2>
        <h2>
          Official Name: <span>{name.official}</span>
        </h2>
        <p>
          Area: <span>{area}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>Languages: {lang}</p>
        <div className={style.btnContainer}>
          <button
            onClick={() => handleRemoveCountry(name.common)}
            title={`Remove ${name.common}`}
          >
            Remove Country
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
