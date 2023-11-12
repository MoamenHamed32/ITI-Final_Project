import ProductCardCols from './../productCardCols/ProductCardCols';
import './ProductList.css';
export default function ProductList() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
    <ProductCardCols className="card " />
  </div>
  )
}

