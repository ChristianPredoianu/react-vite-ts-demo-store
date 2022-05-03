import classes from '@/components/cards/CategoryCard.module.scss';

interface categoryCardProps {
  category: string;
  img: string;
}

export default function CategoryCard({ category, img }: categoryCardProps) {
  const uppercaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={classes.card}>
      <div className={classes.cardOverlay}></div>
      <h3 className={classes.cardHeading}>{uppercaseCategory}</h3>
      <img src={img} alt="category" className={classes.cardImg} />
    </div>
  );
}
