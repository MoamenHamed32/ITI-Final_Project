import ReactCardSlider from "react-card-slider-component";
import styles from "./homeSlider.module.css";
import { productsCol } from "../../config/firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const HomeSlider = () => {
  const [products] = useCollectionData(productsCol);
  const displayedProducts = products ? products.slice(30, 45) : [];

  return (
    <div className={styles.productList_container}>
      <h2 className={styles.productList_title}>Featured Products</h2>
      <ReactCardSlider slides={displayedProducts} />
    </div>
  );
};

export default HomeSlider;
