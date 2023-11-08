import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import ProductCardRows from "../productCardRows/ProductCardRows";
import SearchIcon from "@mui/icons-material/Search";
import style from "./myPxPopup.module.css";

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

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog className={style.list_container} onClose={handleClose} open={open}>
      <div className="container mx-auto w-4/5">
        <h1 className={style.popup_title}>
          Select Your{" "}
          {selectedValue[0]?.toUpperCase() + selectedValue?.slice(1)}
        </h1>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("searchQuery")}
            placeholder={`Search for ${selectedValue}s`}
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
            dataCatigory={selectedValue}
          />
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
