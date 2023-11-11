import PageBanner from "../../Components/pageBanner/PageBanner";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./MyPc.module.css";
import { useSelector } from "react-redux";
import ProductCardRows from "../../Components/productCardRows/ProductCardRows";

export default function MyPc() {
  const myPcData = useSelector((state) => state.myPcData.myPcData);
  const myPcCart = useSelector((state) => state.myPcCart.myPcCart);

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
                  </span>
                )}
              </figure>
            </div>
          </div>
          <div className={style.right}>
            <figure>
              <img src="/public/imgs/pc parts/Case.png" alt="" />

              {myPcData.caseHardWare.case === "" ? (
                <Link to="/my-pc-select/case-hardware">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData.caseHardWare.case}
                </span>
              )}
            </figure>
          </div>
        </div>
        {myPcCart.length > 0 && (
          <div className={style.added}>
            <h2>Your PC</h2>
            <div className="products flex flex-wrap w-100">
              {myPcCart.map((product) => {
                return <ProductCardRows key={product.id} product={product} />;
              })}
            </div>
            <div className={style.checkout}>
              <Link>Checkout</Link>
              <span className={style.total_price}>
                <span>Total Price</span>$ 105.20
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
