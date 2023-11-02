import ProductCardCols from './../productCardCols/ProductCardCols';
import './ProductList.css';
export default function ProductList() {
  return (
    <div className="cards flex  flex-wrap col-md-12 justify-between ">
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
    <ProductCardCols className="card col-xl-3 col-md-4" />
  </div>
  )
}

