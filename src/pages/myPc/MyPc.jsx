import PageBanner from "../../Components/pageBanner/PageBanner";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./MyPc.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCardRows from "../../Components/productCardRows/ProductCardRows";
import { useEffect, useState } from "react";
import { removeFromPc } from "../../Redux/Slices/myPcDataSlice";
import { removeFromCart } from "../../Redux/Slices/myPcCartSlice";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function MyPc() {
  const dispatch = useDispatch();
  const myPcData = useSelector((state) => state.myPcData.myPcData);
  const myPcCart = useSelector((state) => state.myPcCart.myPcCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterDisc, setTotalPriceAfterDisc] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    myPcCart?.map((product) => {
      setTotalPrice((prev) => prev + product.totalPrice.current);
    });
  }, [myPcCart]);
  useEffect(() => {
    setTotalPriceAfterDisc(totalPrice - totalPrice * 0.15);
  }, [totalPrice]);
  const removeProduct = (category) => {
    dispatch(removeFromCart(myPcData[category]));
    dispatch(removeFromPc(category));
  };

  return (
    <section id="my-pc">
      <PageBanner page={"Collect Your PC"} />
      <div className="container mx-auto">
        <div className={style.pc_parts}>
          <div className={style.left}>
            <figure>
              <img src="/public/imgs/pc parts/Speakers.png" alt="" />
              {myPcData.speaker === "" ? (
                <Link to="/my-pc-select/speaker">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData.speaker}
                  <button onClick={() => removeProduct("speaker")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
            </figure>
          </div>
          <div className={style.mid}>
            <figure>
              <img src="/public/imgs/pc parts/Monitor.png" alt="" />

              {myPcData.monitor === "" ? (
                <Link to="/my-pc-select/monitor">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData.monitor}
                  <button onClick={() => removeProduct("monitor")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
            </figure>
            <div className={style.bottom}>
              <figure>
                <img src="/public/imgs/pc parts/Keyboard.png" alt="" />

                {myPcData.keyboard === "" ? (
                  <Link to="/my-pc-select/keyboard">
                    <AddIcon />
                  </Link>
                ) : (
                  <span className={style.selectedProduct}>
                    {myPcData.keyboard}
                    <button onClick={() => removeProduct("keyboard")}>
                      <HighlightOffIcon />
                    </button>
                  </span>
                )}
              </figure>
              <figure>
                <img src="/public/imgs/pc parts/Mouse.png" alt="" />

                {myPcData.mouse === "" ? (
                  <Link className={style.mouse_add} to="/my-pc-select/mouse">
                    <AddIcon />
                  </Link>
                ) : (
                  <span className={style.selectedProduct}>
                    {myPcData.mouse}
                    <button onClick={() => removeProduct("mouse")}>
                      <HighlightOffIcon />
                    </button>
                  </span>
                )}
              </figure>
            </div>
          </div>
          <div className={style.right}>
            <figure>
              <img src="/public/imgs/pc parts/Case.png" alt="" />

              <Link to="/my-pc-select/case-hardware">
                <AddIcon />
              </Link>
            </figure>
          </div>
        </div>
        {myPcCart?.length > 0 && (
          <div className={style.added}>
            <h2>Your PC</h2>
            {myPcCart.map((product) => {
              return <ProductCardRows key={product.id} product={product} />;
            })}
            <div className={style.checkout}>
              <Link>Checkout</Link>
              {myPcCart.length > 9 && (
                <span className={style.old_total_price}>
                  <span className={style.price_label}>Old Total Price</span>${" "}
                  {totalPrice.toFixed(2)}
                </span>
              )}

              <span className={style.total_price}>
                <span className={style.price_label}>Total Price</span>${" "}
                {myPcCart.length > 9
                  ? totalPriceAfterDisc.toFixed(2)
                  : totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
