import { useApi, apiResponse } from '@/hooks/useApi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import CategoryCard from '@/components/cards/CategoryCard';
import ClothesImg from '@/assets/clothes.jpg';
import ElectronicsImg from '@/assets/electronics.jpg';
import JewleryImg from '@/assets/jewlery.jpg';
import WomanImg from '@/assets/woman.png';
import ProductsImg from '@/assets/products.jpg';
import classes from '@/pages/Shop.module.scss';

interface categoryObject {
  category: string;
  img: string;
}

const imgArray = [
  ElectronicsImg,
  ClothesImg,
  JewleryImg,
  WomanImg,
  ProductsImg,
];

export default function Shop() {
  const { data, error, isLoading }: apiResponse = useApi(
    'https://fakestoreapi.com/products/categories'
  );

  //So 'all products' category is included, to be able to fetch all products
  const categories = [{ category: 'all products', img: ProductsImg }];

  //Array of obj with images for every category. Images not provided for each category from API
  data.map((category, index) => {
    return categories.push({ category: category, img: imgArray[index] });
  });

  let output;

  isLoading
    ? (output = (
        <div className={classes.loadingSpinner}>
          <LoadingSpinner />
        </div>
      ))
    : (output = categories.map((category: categoryObject) => (
        <CategoryCard
          key={category.category}
          category={category.category}
          img={category.img}
        />
      )));

  return (
    <>
      <div className={classes.heroImgContainer}>
        <div className={classes.heroHeadings}>
          <h1 className={classes.heroPrimaryHeading}>Lifestyle Products</h1>
          <h2 className={classes.heroSubHeading}>Shop Drip</h2>
        </div>
      </div>
      <div className="container">
        <main className={classes.main}>{output}</main>
      </div>
    </>
  );
}
