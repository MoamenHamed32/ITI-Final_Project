import PageBanner from './../../Components/pageBanner/PageBanner.jsx';
import Footer from './../../Components/Footer/Footer.jsx';
import ProductList from '../../Components/productList/ProductList.jsx';
import { useState } from 'react';
import './shop.css';
import Pagination from '../../Components/Pagination/Pagination.jsx';
export default function Shop() {
  const [currentPage,setCurrentPage]=useState(1);

  // const productPerPage=6;
  const pages = 5;
  // const pages = Math.ceil(sortedProductList.length / productPerPage);
  // const startIndex=(currentPage-1)* productPerPage;
  // const finishIndex= currentPage* productPerPage;
  // const displayedProducts= products.slice(startIndex,finishIndex);
  return (
    <div className="shop-page">
      <PageBanner page={'Shop'} />
      <div className="shop-content">
        <div className="container">
          <div className="filter-section flex justify-between">
            <ul className="filter-options flex justify-start">
              <li>categories</li>
              <li>price</li>
              <li>color</li>
              <li>size</li>
            </ul>
            <p>Showing 01-09 of 17 Results</p>
          </div>
          <ProductList />
          <div className="col-md-12">
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
