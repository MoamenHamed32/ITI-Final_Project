import ReactStars from "react-rating-stars-component";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import PageBanner from "../../Components/pageBanner/PageBanner";
import style from "./ProductDetails.module.css";
import { useState } from "react";
export default function ProductDetails() {
  const [galleryActive, setGalleryActive] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const colorsArr = ["#ffa07a", "#e9967a", "#c38b4b", "#fe5858", "#00b2ee"];
  const sizesArr = ["M", "S", "L", "SL", "XL"];
  const productImgs = [
    "/imgs/gallery1.png",
    "/imgs/gallery2.png",
    "/imgs/gallery3.png",
    "/imgs/gallery4.png",
  ];
  const currentImage = [
    "/imgs/2.png",
    "/imgs/3.png",
    "/imgs/2.png",
    "/imgs/3.png",
  ];

  const colors = colorsArr.map((hexColor) => {
    return (
      <button
        className={style.color}
        key={hexColor}
        style={{ backgroundColor: hexColor }}
      ></button>
    );
  });
  const sizes = sizesArr.map((size) => {
    return (
      <button className={style.size} key={size}>
        {size}
      </button>
    );
  });

  const productGallery = productImgs.map((img, index) => {
    return (
      <a key={index} onClick={() => galleryActivate(index)}>
        <img
          className={galleryActive === index ? style.active : ""}
          src={img}
        />
      </a>
    );
  });

  const galleryActivate = (index) => {
    setGalleryActive(index);
  };
  const nextGalleryImg = () => {
    setGalleryActive((prev) => {
      if (prev < 3) {
        return ++prev;
      } else {
        return 0;
      }
    });
  };
  const previousGalleryImg = () => {
    setGalleryActive((prev) => {
      if (prev > 0) {
        return --prev;
      } else {
        return 3;
      }
    });
  };
  return (
    <section id="product_details">
      <PageBanner page={"Single Product"} />
      <div className="container">
        <div className={style.product_card}>
          <figure className={style.product_img}>
            <img src={currentImage[galleryActive]} alt="" />
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
              <h3 className={style.product_price}>$ 56.20</h3>
            </div>
            <p className={style.product_desc}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have be suffered alteration in some form, by
              injected humou or randomised words which donot look even slightly
              believable. If you are going to use a passage of Lorem Ipsum.
            </p>
            <div className={style.colors}>
              <span>Color</span>
              {colors}
            </div>
            <div className={style.sizes}>
              <span>Size</span>
              {sizes}
            </div>
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
            <div className={style.product_gallery}>
              <button>
                {<KeyboardArrowLeftIcon onClick={previousGalleryImg} />}
              </button>
              <div className={style.gallery}>{productGallery}</div>
              <button>
                {<KeyboardArrowRightIcon onClick={nextGalleryImg} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
