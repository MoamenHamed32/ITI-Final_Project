import { useDispatch, useSelector } from "react-redux";
import { removeFromPcCase } from "../../Redux/Slices/myPcDataSlice";
import { removeFromCart } from "../../Redux/Slices/myPcCartSlice";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import style from "./CaseList.module.css";

export default function CaseList() {
  const myPcData = useSelector((state) => state.myPcData.myPcData);
  const dispatch = useDispatch();
  const removeProduct = (category) => {
    dispatch(removeFromPcCase(category));
    dispatch(removeFromCart(myPcData.caseHardWare[category]));
  };
  return (
    <section id="case_list" className={style.case_list}>
      <div className="container mx-auto w-4/5">
        <div className={`${style.first} flex justify-center mb-6`}>
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FCase.png?alt=media&token=9294cae2-9e88-4af5-8a37-a4dbdb45d203"
              alt=""
            />

            {myPcData?.caseHardWare.case === "" ? (
              <Link to="/my-pc-select/case">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData?.caseHardWare.case}
                <button onClick={() => removeProduct("case")}>
                  <HighlightOffIcon />
                </button>
              </span>
            )}
            <h2 className={style.category_title}>Case</h2>
          </figure>
        </div>
        <div className={`${style.second} flex justify-center gap-x-36 mb-6`}>
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FBoard.png?alt=media&token=333afdd8-ca10-4240-9e87-afe630d2035d"
              alt=""
            />

            {myPcData?.caseHardWare.motherboard === "" ? (
              <Link to="/my-pc-select/motherboard">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData?.caseHardWare.motherboard}
                <button onClick={() => removeProduct("motherboard")}>
                  <HighlightOffIcon />
                </button>
              </span>
            )}
            <h2 className={style.category_title}>Board</h2>
          </figure>
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FPowerSupply.png?alt=media&token=d9e56909-9448-4755-90a1-1cdbb349ea16"
              alt=""
            />

            {myPcData?.caseHardWare.powerSupply === "" ? (
              <Link to="/my-pc-select/powerSupply">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData?.caseHardWare.powerSupply}
                <button onClick={() => removeProduct("powerSupply")}>
                  <HighlightOffIcon />
                </button>
              </span>
            )}
            <h2 className={style.category_title}>Power Supply</h2>
          </figure>
        </div>
        <div
          className={`${style.third}  flex lg:flex-row sm:flex-col justify-center items-center gap-x-12 mb-6`}
        >
          <div className="flex gap-x-36">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FFan.png?alt=media&token=7a639585-63f3-4d90-a265-32b8a16ee968"
                alt=""
              />

              {myPcData?.caseHardWare.fan === "" ? (
                <Link to="/my-pc-select/fan">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.fan}
                  <button onClick={() => removeProduct("fan")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Fan</h2>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FCPU.png?alt=media&token=10c70e74-d111-4124-8c0b-34dbff83b9a7"
                alt=""
              />

              {myPcData?.caseHardWare.cpu === "" ? (
                <Link to="/my-pc-select/cpu" className={style.add_cpu}>
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.cpu}
                  <button onClick={() => removeProduct("cpu")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>CPU</h2>
            </figure>
          </div>
          <div className="flex gap-x-36">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FGPU.png?alt=media&token=4664244b-cbe4-4852-a7bd-b914fbbf1b4f"
                alt=""
              />

              {myPcData?.caseHardWare.gpu === "" ? (
                <Link to="/my-pc-select/gpu">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.gpu}
                  <button onClick={() => removeProduct("gpu")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>GPU</h2>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FHard%20Desk.png?alt=media&token=1f1e0d23-d3bc-4de5-95bb-23ce17866140"
                alt=""
              />

              {myPcData?.caseHardWare.hardDesk === "" ? (
                <Link to="/my-pc-select/hardDesk">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.hardDesk}
                  <button onClick={() => removeProduct("hardDesk")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Hard Desk</h2>
            </figure>
          </div>
        </div>
        <div
          className={`${style.forth}  flex lg:flex-row sm:flex-col xs:flex-col justify-center items-center gap-x-28`}
        >
          <div className="flex gap-x-36">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FRams.png?alt=media&token=aab584e9-e680-4cf8-b0b9-a928536f4246"
                alt=""
              />

              {myPcData?.caseHardWare.ramOne === "" ? (
                <Link to="/my-pc-select/ramOne">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.ramOne}
                  <button onClick={() => removeProduct("ramOne")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Ram 1</h2>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FRams.png?alt=media&token=aab584e9-e680-4cf8-b0b9-a928536f4246"
                alt=""
              />

              {myPcData?.caseHardWare.ramTwo === "" ? (
                <Link to="/my-pc-select/ramTwo">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.ramTwo}
                  <button onClick={() => removeProduct("ramTwo")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Ram 2</h2>
            </figure>
          </div>
          <div className="flex gap-x-36">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FRams.png?alt=media&token=aab584e9-e680-4cf8-b0b9-a928536f4246"
                alt=""
              />

              {myPcData?.caseHardWare.ramThree === "" ? (
                <Link to="/my-pc-select/ramThree">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.ramThree}
                  <button onClick={() => removeProduct("ramThree")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Ram 3</h2>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/pc_parts%2FRams.png?alt=media&token=aab584e9-e680-4cf8-b0b9-a928536f4246"
                alt=""
              />

              {myPcData?.caseHardWare.ramFour === "" ? (
                <Link to="/my-pc-select/ramFour">
                  <AddIcon />
                </Link>
              ) : (
                <span className={style.selectedProduct}>
                  {myPcData?.caseHardWare.ramFour}
                  <button onClick={() => removeProduct("ramFour")}>
                    <HighlightOffIcon />
                  </button>
                </span>
              )}
              <h2 className={style.category_title}>Ram 4</h2>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
