import ReactStars from "react-rating-stars-component";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import style from "./ProductCardRows.module.css";
export default function ProductCardRows() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className={style.product_card_row}>
      <div className={style.product_card}>
        <figure className={style.product_img}>
          <span className={style.product_status}>New</span>
          <img src="/imgs/cards/1.png" alt="" />
        </figure>
        <div className={style.product_details}>
          <div className={style.product_info}>
            <div className={style.title_rate}>
              <h3 className={style.product_title}>Product Title</h3>
              <div className={style.product_rating}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={20}
                  color="#d9d9d9"
                  activeColor="#c87065"
                  isHalf={true}
                  value={2.5}
                />
                <span>( 27 Rating )</span>
              </div>
            </div>
            <div className={style.product_prices}>
              <h3 className={style.product_price}>$ 56.20</h3>
              <h3 className={style.product_old_price}>$ 96.20</h3>
            </div>
          </div>
          <p className={style.product_desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have be suffered alteration in some form, by injected
            humou or randomised words which donot look even slightly believable.
            If you are going to use a passage of Lorem Ipsum.
          </p>

          <div className={style.actions}>
            <div className={style.quantity}>
              <button className="decrease_btn">-</button>
              <span>|</span>
              <span className={style.product_qty}>02</span>
              <span>|</span>
              <button className="increase_btn">+</button>
            </div>
            <div className={style.buttons}>
              <button className="favorite">
                {<FavoriteBorderIcon sx={{ fontSize: 20 }} />}
              </button>
              <span>|</span>
              <button className="more">
                {<ZoomInIcon sx={{ fontSize: 20 }} />}
              </button>
              <span>|</span>
              <button className="refresh">
                {<AutorenewIcon sx={{ fontSize: 20 }} />}
              </button>
              <span>|</span>
              <button className="add_to_cart">
                {<AddShoppingCartIcon sx={{ fontSize: 20 }} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
