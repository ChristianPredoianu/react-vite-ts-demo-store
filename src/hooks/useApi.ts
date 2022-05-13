import { useState, useEffect } from 'react';
import { ApiResponse } from '@/types/apiData.interface';

/* export interface apiResponse<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
}
 */

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
