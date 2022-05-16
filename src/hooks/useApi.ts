import { useState, useEffect } from 'react';

const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useApi;
