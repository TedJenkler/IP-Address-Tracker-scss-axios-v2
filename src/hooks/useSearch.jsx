import { useEffect, useState } from "react";
import axios from "axios";

const useSearch = ({ ip }) => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      if (!apiKey) {
        setError("API key is missing");
        setLoading(false);
        return;
      }
      try {
        const response = await axios(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
        setIpData(response.data);
      } catch (error) {
        setError("Couldn't search for IP");
      } finally {
        setLoading(false);
      }
    };

    if (ip) {
      fetchData();
    }
  }, [ip]);

  return { ipData, error, loading };
};

export default useSearch;