import "./wishList.sass";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PageBanner from "./../../Components/pageBanner/PageBanner";
import ProductImg from "../../../public/imgs/2.webp";
import { useState } from "react";

export default function WishList() {
  const [toggle, setToggle] = useState(2);
  const toggleTaps = (idx) => {
    setToggle(idx);
  };
  return (
    <div className="wish-list">
      <PageBanner page={"WishList"} />
      <div className="page-area">
        <div className="container mx-auto px-4 ">
          <div className="page-area-content">
            <ul className="tabs-menu list-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(1);
                  }}
                  className={toggle === 1 ? "btn btn-active" : "btn"}
                >
                  SHOPPING CART
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(2);
                  }}
                  className={toggle === 2 ? "btn btn-active" : "btn"}
                >
                  WISHLIST
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(3);
                  }}
                  className={toggle === 3 ? "btn btn-active" : "btn"}
                >
                  CHECK OUT
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(4);
                  }}
                  className={toggle === 4 ? "btn btn-active" : "btn"}
                >
                  ORDER COMPLETE
                </button>
              </li>
            </ul>
            <div className="tabs-content">
              <div
                className={
                  toggle === 1 ? "cart-page page page-active" : "page cart-page"
                }
              >
                cart page
              </div>
              <div
                className={
                  toggle === 2
                    ? "wishlist-page page page-active"
                    : "page wishlist-page"
                }
              >
                <div className="table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>STOCK STATUS</th>
                        <th>ADD TO CART</th>
                        <th>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <div className="product-img">
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className="product-info">
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className="product-price">$56.00</td>
                        <td className="product-stock">IN STOCK</td>
                        <td className="add-cart">
                          <button>
                            <AddShoppingCartIcon className="icon" />
                          </button>
                        </td>
                        <td className="remove-product">
                          <button>
                            <CloseIcon className="icon" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <div className="product-img">
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className="product-info">
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className="product-price">$56.00</td>
                        <td className="product-stock">IN STOCK</td>
                        <td className="add-cart">
                          <button>
                            <AddShoppingCartIcon className="icon" />
                          </button>
                        </td>
                        <td className="remove-product">
                          <button>
                            <CloseIcon className="icon" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <div className="product-img">
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className="product-info">
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className="product-price">$56.00</td>
                        <td className="product-stock">IN STOCK</td>
                        <td className="add-cart">
                          <button>
                            <AddShoppingCartIcon className="icon" />
                          </button>
                        </td>
                        <td className="remove-product">
                          <button>
                            <CloseIcon className="icon" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className={
                  toggle === 3
                    ? "checkout-page page page-active"
                    : "page checkout-page"
                }
              >
                checkout page
              </div>
              <div
                className={
                  toggle === 4
                    ? "order-page page page-active"
                    : "page order-page"
                }
              >
                order page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
