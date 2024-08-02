import { useEffect, useState } from "react";
import axios from "axios";

const useLocation = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) throw new Error("API key is missing");

        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
        setIpData(response.data);
      } catch (error) {
        setError('Cannot fetch data of IP');
      } finally {
        setLoading(false);
      }
    };

    fetchIpData();
  }, []);

  return { ipData, error, loading };
};

export default useLocation;