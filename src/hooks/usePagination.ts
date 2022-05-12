import { useState } from 'react';
import { ApiResponse } from '@/types/apiData.interface';

export function usePagination(data: Array<ApiResponse>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);

  function paginationHandler(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function prevPageHandler() {
    if (currentPage !== 1) setCurrentPage((prevState) => (prevState -= 1));
  }

  function nextPageHandler(pageNumbers: number[]) {
    const lastPage = pageNumbers.length;

    if (currentPage !== lastPage)
      setCurrentPage((prevState) => (prevState += 1));
  }

  return {
    currentProducts,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  };
}
