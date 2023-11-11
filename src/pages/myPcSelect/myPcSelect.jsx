/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import PageBanner from "../../Components/pageBanner/PageBanner";
import style from "./myPcSelect.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import List from "@mui/material/List";
import ProductCardRows from "../../Components/productCardRows/ProductCardRows";
import CaseList from "../../Components/CaseList/CaseList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

export default function myPcSelect() {
  const myPcData = useSelector((state) => state.myPcData.myPcData);
  const { category } = useParams();
  const hardwareItems = [
    "case",
    "board",
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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const products = [
    {
      id: 1,
      title: "product 1",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      price: 56.2,
      oldPrice: 96.2,
      rate: 27,
    },
    {
      id: 2,
      title: "product 2",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      price: 56.2,
      oldPrice: 96.2,
      rate: 27,
    },
    {
      id: 3,
      title: "product 3",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      price: 56.2,
      oldPrice: 96.2,
      rate: 27,
    },
  ];
  console.log(myPcData);
  return (
    <section id="mypc_select">
      <PageBanner page={category} />
      {hardwareItems.includes(category) ? (
        <Link className={style.backToMyPc} to="/my-pc-select/case-hardware">
          <ArrowBackIcon /> Back To My PC
        </Link>
      ) : (
        <Link className={style.backToMyPc} to="/my-pc">
          <ArrowBackIcon /> Back To My PC
        </Link>
      )}

      {category === "case-hardware" ? (
        <CaseList />
      ) : (
        <div className="product_list">
          <div className="container mx-auto w-4/5">
            <h1 className={style.title}>
              Select Your {category[0]?.toUpperCase() + category?.slice(1)}
            </h1>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("searchQuery")}
                placeholder={`Search for ${category}s`}
              />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
          <List className={style.products_list} sx={{ pt: 0 }}>
            {products.map((product) => (
              <ProductCardRows
                key={product.id}
                product={product}
                type={"mypc"}
                dataCatigory={category}
              />
            ))}
          </List>
        </div>
      )}
    </section>
  );
}
