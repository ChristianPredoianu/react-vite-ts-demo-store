import useApi from '@/hooks/useApi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import classes from '@/components/layout/footer/Footer.module.scss';
import classNames from 'classnames';

export default function Footer() {
  const { data, isLoading } = useApi<string[]>(
    'https://fakestoreapi.com/products/categories'
  );

  const categoryList = (
    <ul className={classes.list}>
      {data?.map((category) => (
        <li className={classes.listItem} key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={classes.footer}>
      <div className={classNames('container', classes.footerContainer)}>
        <div className={classes.footerList}>
          <h3 className={classes.listHeading}>Categories</h3>
          {isLoading ? <p>Loading...</p> : categoryList}
        </div>
        <div className={classes.footerList}>
          <h3 className={classes.listHeading}>Help</h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>Track order</li>
            <li className={classes.listItem}>Returns</li>
            <li className={classes.listItem}>Shipping</li>
            <li className={classes.listItem}>
              FAQ - Frequently asked questions
            </li>
          </ul>
        </div>
        <div className={classes.footerList}>
          <h3 className={classes.listHeading}>Get in touch</h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Contact us for any kind of questions
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
