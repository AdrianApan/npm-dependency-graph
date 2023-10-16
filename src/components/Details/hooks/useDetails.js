import { useState, useEffect } from "react";
import axios from "axios";

function useDetails(packageName) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(`${url}/${packageName}`);

        // Get latest version from response » data » dist-tags » latest
        const version =
          response.data &&
          Object.entries(response.data)
            .map(([key, value]) => (key === "dist-tags" ? value.latest : null))
            .filter((item) => item !== null)
            .toString();

        // Get latest version details from response » versions
        const data =
          response.data &&
          Object.entries(response.data.versions).filter(
            ([key, value]) => key === version
          )[0][1];
        setApiData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setErrorMsg(
          "We cannot fetch the data at the moment. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageName]);

  return {
    loading,
    error,
    errorMsg,
    apiData,
  };
}

export default useDetails;
