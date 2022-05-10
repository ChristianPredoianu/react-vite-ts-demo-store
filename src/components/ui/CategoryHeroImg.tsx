import { forwardRef } from 'react';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import classes from '@/components/ui/CategoryHeroImg.module.scss';

interface categoryHeroImgProps {
  category?: string;
}

export default forwardRef<HTMLDivElement, categoryHeroImgProps>(
  function CategoryHeroImg({ category }, ref) {
    let uppercaseCategory;

    if (category) {
      uppercaseCategory = category.charAt(0).toUpperCase() + category.slice(1);
    }

    if (ref != null && typeof ref !== 'function') {
      if (ref.current?.classList)
        switch (category) {
          case 'all products':
            ref.current.classList.add(classes.allProducts);
            break;
          case 'electronics':
            ref.current.classList.add(classes.electronics);
            break;
          case 'jewelery':
            ref.current.classList.add(classes.jewlery);
            break;
          case "men's clothing":
            ref.current.classList.add(classes.mens);
            break;
          case "women's clothing":
            ref.current.classList.add(classes.womens);
        }
    }

    return (
      <div className={classes.imgContainer} ref={ref}>
        <div className={classes.social}>
          <SocialMediaTab />
        </div>
        <h1 className={classes.primaryHeading}>{uppercaseCategory}</h1>
      </div>
    );
  }
);
