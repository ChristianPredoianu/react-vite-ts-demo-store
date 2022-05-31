import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/ui/Pagination.module.scss';
import classNames from 'classnames';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  onPaginate: (number: number) => void;
  onPrevPage: () => void;
  onNextPage: (pageNumber: number[]) => void;
}

export default function Pagination({
  productsPerPage,
  totalProducts,
  currentPage,
  onPaginate,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const backArrow = currentPage !== 1 && (
    <a href="#!" onClick={onPrevPage} className={classes.pageLink}>
      <FontAwesomeIcon icon={faArrowLeft} className={classes.arrowLeft} />
    </a>
  );

  const pages = pageNumbers.map((number) => (
    <a
      key={number}
      onClick={() => onPaginate(number)}
      href="#!"
      className={classes.pageLink}
    >
      <li
        key={number}
        className={classNames(classes.pageItem, {
          [classes.activePage]: currentPage === number,
        })}
      >
        {number}
      </li>
    </a>
  ));

  const forwardArrow = pageNumbers.at(-1) !== currentPage && (
    <a
      href="#!"
      onClick={() => onNextPage(pageNumbers)}
      className={classes.pageLink}
    >
      <FontAwesomeIcon icon={faArrowRight} className={classes.arrowRight} />
    </a>
  );
  return (
    <div className={classes.pagination}>
      <ul className={classes.paginationList}>
        {backArrow}
        {pages}
        {forwardArrow}
      </ul>
    </div>
  );
}
