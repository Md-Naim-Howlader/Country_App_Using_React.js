import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getCountries = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setCountries(data);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };
  // useEffect
  useEffect(() => {
    getCountries(URL);
  }, [URL]);

  return {
    countries,
    setCountries,
    isError,
    isLoading,
  };
};

export default useFetch;
