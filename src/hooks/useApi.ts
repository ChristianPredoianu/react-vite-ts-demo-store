import { useState, useEffect } from 'react';
import { ApiResponse } from '@/types/apiData.interface';

export interface apiResponse {
  data: Array<ApiResponse>;
  error: string;
  isLoading: boolean;
}

export function useApi(url: string): apiResponse {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>('');
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
