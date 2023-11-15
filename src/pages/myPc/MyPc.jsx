import PageBanner from "../../Components/pageBanner/PageBanner";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./MyPc.module.css";
import { useSelector } from "react-redux";
import ProductCardRows from "../../Components/productCardRows/ProductCardRows";
import { useEffect, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function MyPc() {
  const myPcData = useSelector((state) => state.myPcData.myPcData);
  const myPcCart = useSelector((state) => state.myPcCart.myPcCart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    myPcCart.map((product) => {
      setTotalPrice((prev) => prev + product.totalPrice.current);
    });
  }, [myPcCart]);

  console.log(myPcCart);
  console.log(myPcData);
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
                  <button>
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
                  <button>
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
                    <button>
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
                    <button>
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
        {myPcCart.length > 0 && (
          <div className={style.added}>
            <h2>Your PC</h2>
            {myPcCart.map((product) => {
              return <ProductCardRows key={product.id} product={product} />;
            })}
            <div className={style.checkout}>
              <Link>Checkout</Link>
              <span className={style.total_price}>
                <span>Total Price</span>$ {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
