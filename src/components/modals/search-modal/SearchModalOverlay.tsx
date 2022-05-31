import React, { useState, useContext, ChangeEvent } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import UserSearchContext from '@/store/user-search-context/userSearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/modals/search-modal/SearchModalOverlay.module.scss';

interface SearchModalOverlayProps {
  onCloseModal: () => void;
}

export default function SearchModalOverlay({
  onCloseModal,
}: SearchModalOverlayProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const userSearchCtx = useContext(UserSearchContext);

  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLOrSVGElement>
  ) {
    e.preventDefault();

    navigate(`/usersearch?q=${createSearchParams(searchTerm)}`, {});
    userSearchCtx.searchHandler(searchTerm);
    onCloseModal();
  }

  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      className={classes.close}
      onClick={onCloseModal}
    />
  );

  const searchInput = (
    <>
      <input
        type="text"
        placeholder="Search"
        className={classes.searchInput}
        onChange={handleChange}
      />

      <FontAwesomeIcon
        icon={faSearch}
        className={classes.searchIcon}
        onClick={handleSubmit}
      />
    </>
  );

  return (
    <div className={classes.modalCard}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search" className={classes.label}>
          Search
        </label>
        {closeIcon}
        <div className={classes.inputContainer}>{searchInput}</div>
      </form>
    </div>
  );
}
