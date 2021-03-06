import { useState, useEffect } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, [screenWidth]);

  return [screenWidth] as const;
}
