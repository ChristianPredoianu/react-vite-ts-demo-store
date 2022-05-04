import { useState, useEffect } from 'react';

export function usePagination(data: []) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(data);

  return { currentProducts, productsPerPage, currentPage, setCurrentPage };
}
