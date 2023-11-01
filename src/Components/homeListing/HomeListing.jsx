import ProductCardCols from "../productCardCols/ProductCardCols";
import styles from "./homeListing.module.css";

const HomeListing = () => {
  return (
    <section className={styles.homeListing_container}>
      <h2>blabla</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
        <ProductCardCols />
      </div>
    </section>
  );
};

export default HomeListing;
