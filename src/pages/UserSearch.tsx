import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '@/hooks/useApi';
import { ApiResponse } from '@/types/apiData.interface';
import { usePagination } from '@/hooks/usePagination';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';
import classes from '@/pages/UserSearch.module.scss';

interface PropState {
  searchTerm: string;
}

export default function UserSearch() {
  const location = useLocation();
  const { searchTerm } = location.state as PropState;
  console.log(location);

  const { data, isLoading } = useApi<ApiResponse[]>(
    'https://fakestoreapi.com/products'
  );

  let filteredProducts: ApiResponse[] = [];
  if (data)
    filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

  console.log(filteredProducts);

  let foundProducts;
  if (filteredProducts) {
    foundProducts = filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  console.log(searchTerm);

  useEffect(() => {
    localStorage.setItem('state', searchTerm);
  }, []);

  const {
    currentProducts,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  } = usePagination(filteredProducts);

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
