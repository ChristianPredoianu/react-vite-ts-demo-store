import { useContext, useEffect } from 'react';
import UserSearchContext from '@/store/user-search-context/userSearchContext';
import useApi from '@/hooks/useApi';
import { ApiResponse } from '@/types/apiData.interface';
import { usePagination } from '@/hooks/usePagination';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';
import classes from '@/pages/UserSearch.module.scss';

export default function UserSearch() {
  const { data, isLoading } = useApi<ApiResponse[]>(
    'https://fakestoreapi.com/products'
  );

  const userSearchCtx = useContext(UserSearchContext);

  let filteredProducts: ApiResponse[] = [];

  if (data)
    filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(userSearchCtx.userSearch)
    );

  const {
    currentProducts,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  } = usePagination(filteredProducts);

  let foundProducts;

  if (currentProducts) {
    foundProducts = currentProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  //Set the current page to 1 when userSearch changes
  useEffect(() => {
    paginationHandler(1);
  }, [userSearchCtx.userSearch]);

  return (
    <div className="container">
      <main className={classes.main}>
        {isLoading ? <LoadingSpinner /> : foundProducts}
      </main>
      {!isLoading && data && (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          currentPage={currentPage}
          onPaginate={paginationHandler}
          onPrevPage={prevPageHandler}
          onNextPage={nextPageHandler}
        />
      )}
    </div>
  );
}
