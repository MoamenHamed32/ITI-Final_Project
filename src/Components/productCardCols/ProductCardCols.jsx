import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactStars from "react-rating-stars-component";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import style from "./ProductCardCols.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { productsCol } from "../../config/firebase/firebase";
import {
  addToWishList,
  deleteFromWishList,
} from "../../Redux/Slices/wishListProducts";
import { useEffect } from "react";

export default function ProductCardCols({ product }) {
  const [data] = useCollectionData(productsCol);
  const [isAddedWish, setIsAddedWish] = useState(false);
  const [isAddedCart, setIsAddedCart] = useState(false);

  const dispatch = useDispatch();

  const wishIcon = isAddedWish ? (
    <FavoriteIcon sx={{ fontSize: 20 }} style={{ color: "#e52424" }} />
  ) : (
    <FavoriteBorderIcon sx={{ fontSize: 20 }} />
  );

  const handleWishClick = (e) => {
    let itemId = e.target.closest(".card").id;
    let item = data?.filter((el) => el.id == itemId);
    if (!isAddedWish) {
      dispatch(addToWishList(item));
    } else {
      dispatch(deleteFromWishList(itemId));
    }
    setIsAddedWish(!isAddedWish);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className={`${style.product_card} card`} id={product?.id}>
      <figure className={style.product_img}>
        <span className={style.product_status}>New</span>
        <div className={style.product_prices}>
          <h3 className={style.product_price}>$ {product?.price}</h3>
        </div>
        <img src={product?.image} alt="" />
      </figure>
      <div className={style.product_details}>
        <div className={style.product_info}>
          <div className={style.title_rate}>
            <h3 className={style.product_title}>
              {product?.title.slice(0, 15)}
            </h3>
            <div className={style.product_rating}>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                color="#d9d9d9"
                activeColor="#C87065"
                isHalf={true}
                value={(product.rating_count / 100) * 5}
              />
            </div>
          </div>
        </div>

        <div className={style.actions}>
          <div className={style.buttons}>
            <button className="favorite" onClick={handleWishClick}>
              {/* {<FavoriteBorderIcon sx={{ fontSize: 20 }} />}
              {<FavoriteIcon sx={{ fontSize: 20 }} />} */}
              {wishIcon}
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
