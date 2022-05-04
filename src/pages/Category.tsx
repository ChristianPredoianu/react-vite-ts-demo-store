import classes from '@/pages/Category.module.scss';
import { useParams } from 'react-router-dom';
import { useApi, apiResponse } from '@/hooks/useApi';
import { usePagination } from '@/hooks/usePagination';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';

interface product {
  image: string;
  price: number;
  rating: object;
  title: string;
  id: number;
  description: string;
}

export default function Category() {
  const { category } = useParams();

  const { data, error, isLoading }: apiResponse = useApi(
    category === 'all products'
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${category}`
  );

  const { currentProducts, productsPerPage, currentPage, setCurrentPage } =
    usePagination(data);

  let uppercaseCategory;
  if (category) {
    uppercaseCategory = category.charAt(0).toUpperCase() + category.slice(1);
  }

  let productCardsOutput;
  console.log(currentPage + 'currentPage');

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

  function paginationHandler(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function nextPageHandler() {
    if (currentPage !== 1) setCurrentPage((prevState) => (prevState -= 1));
  }

  return (
    <div className="container">
      <h1 className={classes.primaryHeading}>{uppercaseCategory}</h1>
      <div className={classes.main}>{productCardsOutput}</div>
      <div className={classes.pagination}>
        {!isLoading && (
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={data.length}
            onPaginate={paginationHandler}
            onNextPage={nextPageHandler}
          />
        )}
      </div>
    </div>
  );
}
