import { Link } from 'react-router-dom';
import classes from '@/components/cards/CategoryCard.module.scss';

interface CategoryCardProps {
  category: string;
  img: string;
}

export default function CategoryCard({ category, img }: CategoryCardProps) {
  const uppercaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Link to={`/shop/${category}`}>
        <div className={classes.card}>
          <div className={classes.cardOverlay}></div>
          <h3 className={classes.cardHeading}>{uppercaseCategory}</h3>
          <img src={img} alt="category" className={classes.cardImg} />
        </div>
      </Link>
    </>
  );
}
