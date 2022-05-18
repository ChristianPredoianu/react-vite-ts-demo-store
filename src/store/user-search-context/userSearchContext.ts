import { createContext } from 'react';

interface UserSearch {
  userSearch: string;
  searchHandler: (userSearch: string) => void;
}

const UserSearchContext = createContext<UserSearch>({
  userSearch: '',
  searchHandler: (userSearch) => {},
});

export default UserSearchContext;
