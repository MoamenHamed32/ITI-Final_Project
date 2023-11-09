import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PageBanner from "./../../Components/pageBanner/PageBanner";
import ProductImg from "../../../public/imgs/2.webp";
import styles from "./wishList.module.css";

export default function WishList() {
  const [toggle, setToggle] = useState(2);
  const [total, setTotal] = useState(170);

  const toggleTaps = (idx) => {
    setToggle(idx);
  };

  const initialOptions = {
    clientId:
      "AVimr_VGtegk0WuXLEYBYtHQkgd9SIq8r_06zhTPfo-kXmRe1W9FATTUyj8VWsl9qL-r_k3AU7ePRjtD",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log(order);
  };
  const onError = (err) => {
    console.log(err);
  };

  return (
    <div className={styles.wish_list}>
      <PageBanner page={"WishList"} />
      <div className={styles.page_area}>
        <div className={`container mx-auto`}>
          <div className={styles.page_area_content}>
            <ul
              className={`${styles.tabs_menu} list-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12`}
            >
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(1);
                  }}
                  className={
                    toggle === 1
                      ? `${styles.btn} ${styles.btn_active}`
                      : `${styles.btn}`
                  }
                >
                  SHOPPING CART
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(2);
                  }}
                  className={
                    toggle === 2
                      ? `${styles.btn} ${styles.btn_active}`
                      : `${styles.btn}`
                  }
                >
                  WISHLIST
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(3);
                  }}
                  className={
                    toggle === 3
                      ? `${styles.btn} ${styles.btn_active}`
                      : `${styles.btn}`
                  }
                >
                  CHECK OUT
                </button>
              </li>
              <li className="col-span-12 lg:col-span-3">
                <button
                  onClick={() => {
                    toggleTaps(4);
                  }}
                  className={
                    toggle === 4
                      ? `${styles.btn} ${styles.btn_active}`
                      : `${styles.btn}`
                  }
                >
                  ORDER COMPLETE
                </button>
              </li>
            </ul>
            <div className={styles.tabs_content}>
              <div
                className={
                  toggle === 1
                    ? `${styles.cart_page} ${styles.page} ${styles.page_active}`
                    : ` ${styles.page}  ${styles.cart_page}`
                }
              >
                <div className={styles.table_content}>
                  <table>
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
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
                            <h4 className={styles.title}>dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_quantity}>
                          <div className={styles.flex}>
                            <button>-</button>
                            <input type="number" value="1" min="1" />
                            <button>+</button>
                          </div>
                        </td>
                        <td className={styles.product_total}>$112.00</td>
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
                            <h4 className={styles.title}>dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_quantity}>
                          <div className={styles.flex}>
                            <button>-</button>
                            <input type="number" value="1" min="1" />
                            <button>+</button>
                          </div>
                        </td>
                        <td className={styles.product_total}>$112.00</td>
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
                            <h4 className={styles.title}>dummy product name</h4>
                            <p>
                              <span>Color :</span> Black
                            </p>
                            <p>
                              <span>Size : </span> SL
                            </p>
                          </div>
                        </td>
                        <td className={styles.product_price}>$56.00</td>
                        <td className={styles.product_quantity}>
                          <div className={styles.flex}>
                            <button>-</button>
                            <input type="number" value="1" min="1" />
                            <button>+</button>
                          </div>
                        </td>
                        <td className={styles.product_total}>$112.00</td>
                        <td className={styles.remove_product}>
                          <button>
                            <CloseIcon className={styles.icon} />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className={`${styles.discount_payment} grid grid-cols-12 gap-6`}
                >
                  <div
                    className={`col-span-12 md:col-span-6 ${styles.coupon_discount}`}
                  >
                    <h4>COUPON DISCOUNT</h4>
                    <p>Enter your coupon code if you have one!</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your code here."
                    />
                    <button className={styles.btn}>APPLY COUPON</button>
                  </div>
                  <div
                    className={`col-span-12 md:col-span-6 ${styles.payment_details}`}
                  >
                    <h4>PAYMENT DETAILS</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>$155.00</td>
                        </tr>
                        <tr>
                          <td>Cart Subtotal </td>
                          <td>$15.00</td>
                        </tr>
                        <tr>
                          <td>Vat</td>
                          <td>$00.00</td>
                        </tr>
                        <tr className={styles.total}>
                          <td>Order Total</td>
                          <td>$170.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={`col-span-12 ${styles.culture_shipping}`}>
                    <h4>CULCULATE SHIPPING</h4>
                    <p>Enter your coupon code if you have one!</p>
                    <div
                      className={`${styles.inputs_group} grid grid-cols-12 gap-6`}
                    >
                      <div className={`col-span-12 lg:col-span-4`}>
                        <input type="text" placeholder="Country" />
                      </div>
                      <div className={`col-span-12 lg:col-span-4`}>
                        <input type="text" placeholder="Region / State" />
                      </div>
                      <div className={`col-span-12 lg:col-span-4`}>
                        <input type="text" placeholder="Post code" />
                      </div>
                    </div>
                    <button className={styles.btn}>GET A QUOTE</button>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggle === 2
                    ? `${styles.wishlist_page} ${styles.page} ${styles.page_active}`
                    : `${styles.page} ${styles.wishlist_page}`
                }
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
              <div
                className={
                  toggle === 3
                    ? `${styles.checkout_page} ${styles.page} ${styles.page_active} bg-white`
                    : `${styles.page} ${styles.checkout_page} bg-white`
                }
              >
                <div
                  className={`${styles.discount_payment} grid grid-cols-12 gap-6`}
                >
                  <div
                    className={`col-span-12 md:col-span-6 ${styles.our_order}`}
                  >
                    <h4>OUR ORDER</h4>
                    <table className="flex flex-col">
                      <thead>
                        <tr className="text-left w-full">
                          <th className="w-full">PRODUCT</th>
                          <th className="w-full">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dummy Product Name x 2 </td>
                          <td>$155.00</td>
                        </tr>
                        <tr>
                          <td>Dummy Product Name x 1 </td>
                          <td>$155.00</td>
                        </tr>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>$155.00</td>
                        </tr>
                        <tr>
                          <td>Shipping and Handing </td>
                          <td>$15.00</td>
                        </tr>
                        <tr>
                          <td>Vat</td>
                          <td>$00.00</td>
                        </tr>
                        <tr className={styles.total}>
                          <td>Order Total</td>
                          <td>${total.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className={`col-span-12 md:col-span-6 ${styles.billing_method}`}
                  >
                    <h4>BILLING METHOD</h4>
                    <div className="form flex flex-col gap-5">
                      <input
                        type="text"
                        id="text"
                        placeholder="Your Name here..."
                      />
                      <input
                        type="email"
                        id="email"
                        placeholder="Email address here..."
                      />
                      <input
                        type="number"
                        id="phone"
                        placeholder="Phone number here..."
                      />
                      <textarea
                        id="address"
                        placeholder="Your address here..."
                      ></textarea>
                    </div>
                    <h4>PAYMENT METHOD</h4>
                    <button className="btn">
                      {/* <div id="paypal-button-container"></div> */}
                      <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        />
                      </PayPalScriptProvider>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggle === 4
                    ? `${styles.order_page} ${styles.page} ${styles.page_active}`
                    : `${styles.page} ${styles.order_page}`
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
