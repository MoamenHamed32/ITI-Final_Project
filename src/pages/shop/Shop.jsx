import { useRef, useState } from "react";

import Catigories from "./../../Components/categories/Catigories";
import PageBanner from "./../../Components/pageBanner/PageBanner.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import ProductList from "../../Components/productList/ProductList.jsx";
import styles from "./shop.module.css";

const categories = [
  "All",
  "Monitor",
  "Mouse",
  "Case",
  "Keyboard",
  "Speaker",
  "Ram",
  "Vga",
  "Board",
  "Hard",
  "Power supply",
];

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  // const productPerPage=6;
  const pages = 5;
  // const pages = Math.ceil(sortedProductList.length / productPerPage);
  // const startIndex=(currentPage-1)* productPerPage;
  // const finishIndex= currentPage* productPerPage;
  // const displayedProducts= products.slice(startIndex,finishIndex);

  const [isActive, setIsActive] = useState(false);
  const widgetCatRef = useRef(null);
  const widgetPriceRef = useRef(null);
  const [categoryVal, setCategoryVal] = useState("");

  const handleCategoryBtn = () => {
    widgetCatRef.current.classList.toggle("active");
    setIsActive(!isActive);
  };

  const handleListVal = (event) => {
    setCategoryVal(event.target.innerText);
    event.target.parentElement.parentElement.classList.remove("active");
    setIsActive(false);
  };

  const categoriesList = categories.map((cat, idx) => (
    <li onClick={handleListVal} key={idx}>
      {cat}
    </li>
  ));

  return (
    <div className={styles.shop_page}>
      <PageBanner page={"Shop"} />
      <div className={styles.shop_content}>
        <div className="container">
          <div className={`${styles.filter_section} flex justify-between`}>
            <ul
              className={`${styles.filter_options} flex justify-start capitalize`}
            >
              <li>
                <button
                  className="capitalize relative"
                  onClick={handleCategoryBtn}
                >
                  categories
                </button>
                <div
                  ref={widgetCatRef}
                  className={
                    isActive
                      ? `${styles.widget} ${styles.widget_categories} block absolute z-50 bg-white pt-5`
                      : `${styles.widget} ${styles.widget_categories} absolute z-50 bg-white pt-5`
                  }
                >
                  <h4 className="uppercase font-bold text-black">Categories</h4>
                  <ul className="list-none">{categoriesList}</ul>
                </div>
              </li>
              <li>
                <button className="capitalize relative">price</button>
              </li>
              <li>
                <button className="capitalize relative">color</button>
              </li>
              <li>
                <button className="capitalize relative">size</button>
              </li>
            </ul>
            <p>Showing 01-09 of 17 Results</p>
          </div>
          <ProductList filterData={categoryVal} />
          <div className="col-md-12">
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
