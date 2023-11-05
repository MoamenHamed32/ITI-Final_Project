import PageBanner from "../../Components/pageBanner/PageBanner";
import PorductCardRows from "../../Components/productCardRows/ProductCardRows";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./MyPc.module.css";

export default function MyPc() {
  return (
    <section id="my-pc">
      <PageBanner page={"Collect Your PC"} />
      <div className="container mx-auto">
        <div className={style.pc_parts}>
          <div className={style.left}>
            <figure>
              <img src="/public/imgs/pc parts/Speakers.png" alt="" />
              <Link to="">
                <AddIcon />
              </Link>
            </figure>
          </div>
          <div className={style.mid}>
            <figure>
              <img src="/public/imgs/pc parts/Monitor.png" alt="" />
              <Link to="">
                <AddIcon />
              </Link>
            </figure>
            <div className={style.bottom}>
              <figure>
                <img src="/public/imgs/pc parts/Keyboard.png" alt="" />
                <Link to="">
                  <AddIcon />
                </Link>
              </figure>
              <figure>
                <img src="/public/imgs/pc parts/Mouse.png" alt="" />
                <Link className={style.mouse_add} to="">
                  <AddIcon />
                </Link>
              </figure>
            </div>
          </div>
          <div className={style.right}>
            <figure>
              <img src="/public/imgs/pc parts/Case.png" alt="" />
              <Link to="">
                <AddIcon />
              </Link>
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
