import { useState, useEffect } from 'react';

export interface apiResponse {
  data: [];
  error: any;
  isLoading: boolean;
}

export function useApi(url: string): apiResponse {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<any>();
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
}
