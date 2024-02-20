/* eslint-disable react-refresh/only-export-components */
import react, { useState, useEffect, memo } from "react";

const useFetch = (URL) => {
  const [countries, setCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const getCountries = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setIsLoading(false);
      setCountries(data);
      setFilterdCountries(data);
      setIsError(null);
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
      setCountries([]);
      setFilterdCountries([]);
    }
  };

  const handleRemoveCountry = (cname) => {
    const filterCountry = filterdCountries.filter(
      (country) => country.name.common !== cname
    );
    setFilterdCountries(filterCountry);
  };
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      return countryName.startsWith(value);
    });
    setFilterdCountries(newCountries);
  };
  // useEffect
  useEffect(() => {
    getCountries(URL);
  }, [URL]);

  return {
    countries,
    setCountries,
    filterdCountries,
    setFilterdCountries,
    isError,
    isLoading,
    handleSearch,
    handleRemoveCountry,
  };
};

export default useFetch;
