import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import style from "./CaseList.module.css";

export default function CaseList() {
  const myPcData = useSelector((state) => state.myPcData.myPcData);

  return (
    <section id="case_list" className={style.case_list}>
      <div className="container mx-auto w-4/5">
        <div className={`${style.first} flex justify-center mb-6`}>
          <figure>
            <img src="/imgs/pc parts/Case.png" alt="" />

            {myPcData.caseHardWare.case === "" ? (
              <Link to="/my-pc-select/case">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.case}
              </span>
            )}
            <h2 className={style.category_title}>Case</h2>
          </figure>
        </div>
        <div className={`${style.second} flex justify-center gap-x-36 mb-6`}>
          <figure>
            <img src="/imgs/pc parts/Board.png" alt="" />

            {myPcData.caseHardWare.board === "" ? (
              <Link to="/my-pc-select/board">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.board}
              </span>
            )}
            <h2 className={style.category_title}>Board</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/PowerSupply.png" alt="" />

            {myPcData.caseHardWare.powerSupply === "" ? (
              <Link to="/my-pc-select/powerSupply">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.powerSupply}
              </span>
            )}
            <h2 className={style.category_title}>Power Supply</h2>
          </figure>
        </div>
        <div className={`${style.third} flex justify-center gap-x-12 mb-6`}>
          <figure>
            <img src="/imgs/pc parts/Fan.png" alt="" />

            {myPcData.caseHardWare.fan === "" ? (
              <Link to="/my-pc-select/fan">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.fan}
              </span>
            )}
            <h2 className={style.category_title}>Fan</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/CPU.png" alt="" />

            {myPcData.caseHardWare.cpu === "" ? (
              <Link to="/my-pc-select/cpu" className={style.add_cpu}>
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.cpu}
              </span>
            )}
            <h2 className={style.category_title}>CPU</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/GPU.png" alt="" />

            {myPcData.caseHardWare.gpu === "" ? (
              <Link to="/my-pc-select/gpu">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.gpu}
              </span>
            )}
            <h2 className={style.category_title}>GPU</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/Hard Desk.png" alt="" />

            {myPcData.caseHardWare.hardDesk === "" ? (
              <Link to="/my-pc-select/hardDesk">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.hardDesk}
              </span>
            )}
            <h2 className={style.category_title}>Hard Desk</h2>
          </figure>
        </div>
        <div className={`${style.forth} flex justify-center gap-x-28`}>
          <figure>
            <img src="/imgs/pc parts/Rams.png" alt="" />

            {myPcData.caseHardWare.ramOne === "" ? (
              <Link to="/my-pc-select/ramOne">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.ramOne}
              </span>
            )}
            <h2 className={style.category_title}>Ram 1</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/Rams.png" alt="" />

            {myPcData.caseHardWare.ramTwo === "" ? (
              <Link to="/my-pc-select/ramTwo">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.ramTwo}
              </span>
            )}
            <h2 className={style.category_title}>Ram 2</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/Rams.png" alt="" />

            {myPcData.caseHardWare.ramThree === "" ? (
              <Link to="/my-pc-select/ramThree">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.ramThree}
              </span>
            )}
            <h2 className={style.category_title}>Ram 3</h2>
          </figure>
          <figure>
            <img src="/imgs/pc parts/Rams.png" alt="" />

            {myPcData.caseHardWare.ramFour === "" ? (
              <Link to="/my-pc-select/ramFour">
                <AddIcon />
              </Link>
            ) : (
              <span className={style.selectedProduct}>
                {myPcData.caseHardWare.ramFour}
              </span>
            )}
            <h2 className={style.category_title}>Ram 4</h2>
          </figure>
        </div>
      </div>
    </section>
  );
}
