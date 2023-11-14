import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PageBanner from "./../../Components/pageBanner/PageBanner";
import ProductImg from "../../../public/imgs/2.webp";
import styles from "./wishList.module.css";

export default function WishList() {
  return (
    <div className={styles.wish_list}>
      <PageBanner page={"WishList"} />
      <div className={styles.page_area}>
        <div className={`container mx-auto`}>
          <div className={styles.page_area_content}>
            <div className={styles.tabs_content}>
              <div
                className={`${styles.wishlist_page} ${styles.page} ${styles.page_active}`}
              >
                <div className={styles.table_content}>
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
                        <td className={styles.product_thumbnail}>
                          <div className={styles.product_img}>
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className={styles.product_info}>
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_stock}>IN STOCK</td>
                        <td className={styles.add_cart}>
                          <button>
                            <AddShoppingCartIcon className={styles.icon} />
                          </button>
                        </td>
                        <td className={styles.remove_product}>
                          <button>
                            <CloseIcon className={styles.icon} />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.product_thumbnail}>
                          <div className={styles.product_img}>
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className={styles.product_info}>
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_stock}>IN STOCK</td>
                        <td className={styles.add_cart}>
                          <button>
                            <AddShoppingCartIcon className={styles.icon} />
                          </button>
                        </td>
                        <td className={styles.remove_product}>
                          <button>
                            <CloseIcon className={styles.icon} />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.product_thumbnail}>
                          <div className={styles.product_img}>
                            <img src={ProductImg} alt="product img" />
                          </div>
                          <div className={styles.product_info}>
                            <h4 className="title">dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_stock}>IN STOCK</td>
                        <td className={styles.add_cart}>
                          <button>
                            <AddShoppingCartIcon className={styles.icon} />
                          </button>
                        </td>
                        <td className={styles.remove_product}>
                          <button>
                            <CloseIcon className={styles.icon} />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
