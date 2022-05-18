import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '@/hooks/useApi';
import { usePagination } from '@/hooks/usePagination';
import CategoryHeroImg from '@/components/ui/CategoryHeroImg';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';
import classes from '@/pages/Category.module.scss';
import { ApiResponse } from '@/types/apiData.interface';

export default function Category() {
  const { category } = useParams();

  const heroDivRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useApi<ApiResponse[]>(
    category === 'all products'
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${category}`
  );

  const {
    currentProducts,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  } = usePagination(data);

  let uppercaseCategory;
  if (category) {
    uppercaseCategory = category.charAt(0).toUpperCase() + category.slice(1);
  }

  let productCardsOutput;

  if (isLoading) {
    productCardsOutput = (
      <div className={classes.loadingSpinner}>
        <LoadingSpinner />
      </div>
    );
  } else if (currentProducts) {
    productCardsOutput = currentProducts.map((product: ApiResponse) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  return (
    <>
      <CategoryHeroImg ref={heroDivRef} category={category} />
      <div className="container">
        <main className={classes.main}>{productCardsOutput}</main>
        {!isLoading && data && (
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={data.length}
            currentPage={currentPage}
            onPaginate={paginationHandler}
            onPrevPage={prevPageHandler}
            onNextPage={nextPageHandler}
          />
        )}
      </div>
    </>
  );
}
