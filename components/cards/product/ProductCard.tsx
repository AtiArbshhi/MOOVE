import Image from 'next/image';
import styles from './ProductCard.module.css';

export interface IProductCard {
  title: string;
  price: number;
  options: Array<string>;
}

const ProductCard: React.FC<IProductCard> = ({ title, price, options }) => {
  return (
    <div className={styles.card}>
      <Image
        src="/products/shoes.jpg"
        alt="running shoes"
        className={styles.card__image}
        width="600"
        height="400"
      />
      <p>{title}</p>
      <p>{price}</p>
      {options.length > 0 &&
        options.map((option, i) => <li key={i}>{option}</li>)}

      <button>Quick View</button>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
