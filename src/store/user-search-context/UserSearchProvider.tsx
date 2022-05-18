import { useState, useEffect } from 'react';
import UserSearchContext from '@/store/user-search-context/userSearchContext';

interface UserSearchProps {
  children: React.ReactNode;
}

export default function UserSearchProvider({ children }: UserSearchProps) {
  const [userSearch, setUserSearch] = useState('');

  function searchHandler(userSearch: string) {
    setUserSearch(userSearch);
  }

  return (
    <UserSearchContext.Provider
      value={{ userSearch: userSearch, searchHandler: searchHandler }}
    >
      {children}
    </UserSearchContext.Provider>
  );
}
