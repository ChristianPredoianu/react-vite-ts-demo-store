import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useApi, apiResponse } from '@/hooks/useApi';
import { usePagination } from '@/hooks/usePagination';
import CategoryHeroImg from '@/components/ui/CategoryHeroImg';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';
import classes from '@/pages/Category.module.scss';

interface product {
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  id: number;
  description: string;
}

export default function Category() {
  const { category } = useParams();

  const heroDivRef = useRef<HTMLDivElement>(null);

  const { data, error, isLoading }: apiResponse = useApi(
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
  } else {
    productCardsOutput = currentProducts.map((product: product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  return (
    <>
      <CategoryHeroImg ref={heroDivRef} category={category} />
      <div className="container">
        <main className={classes.main}>{productCardsOutput}</main>
        <div className={classes.pagination}>
          {!isLoading && (
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
      </div>
    </>
  );
}
