import { useState } from "react";
import PageBanner from "../../Components/pageBanner/PageBanner";
import PorductCardRows from "../../Components/productCardRows/ProductCardRows";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./MyPc.module.css";
import SimpleDialog from "../../Components/myPcPopup/myPcPopup";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../Redux/myPcPopupSlice";

export default function MyPc() {
  const popupState = useSelector((state) => state.open.open);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleClickOpen = (value) => {
    dispatch(openPopup());
    setSelectedCategory(value);
  };

  const handleClose = () => {
    dispatch(closePopup());
  };
  return (
    <section id="my-pc">
      <PageBanner page={"Collect Your PC"} />
      <div className="container mx-auto">
        <SimpleDialog
          open={popupState}
          selectedValue={selectedCategory}
          onClose={handleClose}
        />
        <div className={style.pc_parts}>
          <div className={style.left}>
            <figure>
              <img src="/public/imgs/pc parts/Speakers.png" alt="" />
              <button onClick={() => handleClickOpen("speaker")}>
                <AddIcon />
              </button>
            </figure>
          </div>
          <div className={style.mid}>
            <figure>
              <img src="/public/imgs/pc parts/Monitor.png" alt="" />

              <button onClick={() => handleClickOpen("monitor")}>
                <AddIcon />
              </button>
            </figure>
            <div className={style.bottom}>
              <figure>
                <img src="/public/imgs/pc parts/Keyboard.png" alt="" />
                <button onClick={() => handleClickOpen("keyboard")}>
                  <AddIcon />
                </button>
              </figure>
              <figure>
                <img src="/public/imgs/pc parts/Mouse.png" alt="" />

                <button
                  className={style.mouse_add}
                  onClick={() => handleClickOpen("mouse")}
                >
                  <AddIcon />
                </button>
              </figure>
            </div>
          </div>
          <div className={style.right}>
            <figure>
              <img src="/public/imgs/pc parts/Case.png" alt="" />
              <button onClick={() => handleClickOpen("case")}>
                <AddIcon />
              </button>
            </figure>
          </div>
        </div>
        <div className={style.added}>
          <h2>Your PC</h2>
          <div className="products flex flex-wrap w-100">
            <PorductCardRows />
            <PorductCardRows />
            <PorductCardRows />
          </div>
          <div className={style.checkout}>
            <Link>Checkout</Link>
            <span className={style.total_price}>
              <span>Total Price</span>$ 105.20
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
