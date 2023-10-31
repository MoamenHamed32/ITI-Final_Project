import ReactStars from "react-rating-stars-component";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import style from "./ProductCardCols.module.css";

export default function ProductCardCols() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className={style.product_card}>
      <figure className={style.product_img}>
        <span className={style.product_status}>New</span>
        <div className={style.product_prices}>
          <h3 className={style.product_price}>$ 56.20</h3>
        </div>
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
            </div>
          </div>
        </div>

        <div className={style.actions}>
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
  );
}
