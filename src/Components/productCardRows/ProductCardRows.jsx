/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import style from "./ProductCardRows.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Slices/myPcCartSlice";
import { addToPc, addToPcCase } from "../../Redux/Slices/myPcDataSlice";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

export default function ProductCardRows({ product, type, dataCatigory }) {
  const myPcCart = useSelector((state) => state.myPcCart.myPcCart);

  const dispatch = useDispatch();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { category } = useParams();
  const hardwareItems = [
    "case",
    "motherboard",
    "powerSupply",
    "fan",
    "cpu",
    "gpu",
    "hardDesk",
    "ramOne",
    "ramTwo",
    "ramThree",
    "ramFour",
  ];
  const priceAfterDisc =
    product?.price - (product?.discount_percentage / 100) * product?.price;
  const productQty = useRef(1);
  const totalPrice = useRef(priceAfterDisc);
  const colors = product?.color?.split(" / ");

  const handleApply = (id) => {
    let dublicated = myPcCart.find((product) => product.id == id);

    if (["ramOne", "ramTwo", "ramThree", "ramFour"].includes(category)) {
      dispatch(
        addProduct({ ...product, priceAfterDisc, productQty, totalPrice })
      );
      dispatch(
        addToPcCase({
          catigory: dataCatigory,
          productTitle: product.title,
        })
      );
    } else {
      if (!dublicated) {
        dispatch(
          addProduct({ ...product, priceAfterDisc, productQty, totalPrice })
        );
        if (hardwareItems.includes(category)) {
          dispatch(
            addToPcCase({
              catigory: dataCatigory,
              productTitle: product.title,
            })
          );
        } else {
          dispatch(
            addToPc({
              catigory: dataCatigory,
              productTitle: product.title,
            })
          );
        }
      }
    }
  };

  // const removeFromCart = () => {
  //   dispatch(
  //     addToPc({
  //       catigory: dataCatigory,
  //       productTitle: "",
  //     })
  //   );
  // };
  return (
    <div className={style.product_card}>
      <figure className={style.product_img}>
        <span className={style.product_status}>
          {product?.state.toUpperCase()}
        </span>
        <img src={product?.image} alt="" />
      </figure>
      <div className={style.product_details}>
        <div className={style.product_info}>
          <div className={style.title_rate}>
            <h3 className={style.product_title}>{product?.title}</h3>
            <div className={style.product_rating}>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                color="#d9d9d9"
                activeColor="#C87065"
                isHalf={true}
                value={product?.rating}
              />
              <span>( {product?.rating_count} Rating )</span>
            </div>
          </div>
          <div className={style.product_prices}>
            <h3 className={style.product_price}>
              $ {priceAfterDisc?.toFixed(2)}
            </h3>
            <h3 className={style.product_old_price}>$ {product?.price}</h3>
            {product?.productQty?.current > 1 && (
              <h3 className={style.product_qty}>
                <CloseIcon /> {product.productQty.current}
              </h3>
            )}
          </div>
        </div>

        <div className={style.category_details}>
          {colors && (
            <div className={style.colors}>
              <h3>Colors : </h3>
              {colors.map((color) => (
                <span
                  className={style.color}
                  key={color}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
            </div>
          )}
        </div>

        {type === "mypc" ? (
          hardwareItems.includes(category) ? (
            <Link
              to="/my-pc-select/case-hardware"
              onClick={() => handleApply(product.id)}
              className={style.apply_btn}
            >
              Apply Now
            </Link>
          ) : (
            <Link
              to="/my-pc"
              onClick={() => handleApply(product.id)}
              className={style.apply_btn}
            >
              Apply Now
            </Link>
          )
        ) : (
          <div className={style.actions}>
            {category != undefined && (
              <div className={style.quantity}>
                <button className="decrease_btn">-</button>
                <span>|</span>
                <span className={style.product_qty}>01</span>
                <span>|</span>
                <button className="increase_btn">+</button>
              </div>
            )}

            <div className={style.buttons}>
              <button className="favorite">
                {<FavoriteBorderIcon sx={{ fontSize: 20 }} />}
              </button>
              <span>|</span>
              <Link to={`/product-details/${product.id}`} className="more">
                {<ZoomInIcon sx={{ fontSize: 20 }} />}
              </Link>
              <span>|</span>
              <button className="refresh">
                {<AutorenewIcon sx={{ fontSize: 20 }} />}
              </button>
              <span>|</span>
              <button className="add_to_cart">
                {<RemoveShoppingCartIcon sx={{ fontSize: 20 }} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
