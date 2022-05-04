import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/ui/Pagination.module.scss';

interface paginationProps {
  productsPerPage: number;
  totalProducts: number;
  onPaginate: (number: number) => void;
  onNextPage: () => void;
}

export default function Pagination({
  productsPerPage,
  totalProducts,
  onPaginate,
  onNextPage,
}: paginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <ul className={classes.paginationList}>
      <a href="#" onClick={onNextPage}>
        <FontAwesomeIcon icon={faArrowLeft} className={classes.arrowLeft} />
      </a>
      {pageNumbers.map((number) => (
        <a
          onClick={() => onPaginate(number)}
          href="#"
          className={classes.pageLink}
        >
          <li key={number} className={classes.pageItem}>
            {number}
          </li>
        </a>
      ))}
      <FontAwesomeIcon icon={faArrowRight} className={classes.arrowRight} />
    </ul>
  );
}
