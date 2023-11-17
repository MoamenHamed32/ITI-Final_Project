import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PageBanner from "./../../Components/pageBanner/PageBanner";
import styles from "./wishList.module.css";
import { useSelector } from "react-redux";

export default function WishList() {
  // const wishListData = useSelector((state) => state.wishListProducts.wishList);
  const currentUser = useSelector((state) => state.auth.currentUser);
  // console.log(wishListData);

  const trItems = currentUser?.wishlist?.map((product) => {
    return (
      <tr key={product.id}>
        <td className={styles.product_thumbnail}>
          <div className={styles.product_img}>
            <img src={product.image} alt="product img" />
          </div>
          <div className={styles.product_info}>
            <h4 className="title">{product.title?.slice(0, 30)}</h4>
            <p>
              <span>Color :</span> {product.color}
            </p>
            {/* <p>
              <span>Size : </span> SL
            </p> */}
          </div>
        </td>
        <td className={styles.product_price}>${product.price?.toFixed(2)}</td>
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
    );
  });

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
                    <tbody>{trItems}</tbody>
                  </table>
                  {trItems.length <= 0 && (
                    <p className="text-center pt-7 text-sm capitalize text-gray-400">
                      no items added to wishList
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
