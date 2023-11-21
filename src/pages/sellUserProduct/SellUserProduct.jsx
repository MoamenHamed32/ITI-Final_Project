/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import PageBanner from "../../Components/pageBanner/PageBanner";
import { productsCol } from "../../config/firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase/firebase";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styles from "./sellUserProducts.module.css";
import { useState } from "react";

const SellUserProduct = () => {
  const [imageUpload, setImageUpload] = useState();
  const { handleSubmit, register, control, formState, reset } = useForm({
    mode: "onChange",
  });
  const [products] = useCollectionData(productsCol);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const { isValid, errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const imagesRef = await ref(
        storage,
        `product_images/${data.image[0].name}`
      );
      const snapshot = await uploadBytes(imagesRef, data.image[0]);
      const url = await getDownloadURL(snapshot.ref);
      await addDoc(productsCol, {
        ...data,
        image: url,
        "thumb-images": [url],
        owner: currentUser?._id,
        id: products.length + 1,
      });

      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <PageBanner page={"Sell your product"} />
      <section className={`container ${styles.sec_container}`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.userSell_from}
        >
          <div className={styles.input_warper}>
            <label className={errors.title && styles.errorLabel}>Title</label>
            <input {...register("title", { required: true })} />
          </div>
          <div className={styles.input_warper}>
            <label className={errors.price && styles.errorLabel}>Price</label>
            <input type="number" {...register("price", { required: true })} />
            <span>£</span>
          </div>
          <div className={styles.input_warper}>
            <label className={errors.color && styles.errorLabel}>Color</label>
            <input {...register("color", { required: true })} />
          </div>
          <div className={styles.input_warper_image}>
            <label className={errors.image && styles.errorLabel}>Image</label>
            <label className={styles.img_label} htmlFor="image">
              <CameraAltIcon />
              <h3>Upload Your Image</h3>
              <input
                id="image"
                type="file"
                accept="image/png, image/jpeg"
                {...register("image", { required: true })}
              />
            </label>
          </div>
          <div className={styles.select_warper}>
            <label className={errors.type && styles.errorLabel}>Type</label>
            <select {...register("category", { required: true })}>
              <option value="case">Case</option>
              <option value="cpu">CPU</option>
              <option value="internal-hard-drive">Internal Hard Drive</option>
              <option value="keyboard">Keyboard</option>
              <option value="memory">Memory</option>
              <option value="monitor">Monitor</option>
              <option value="motherboard">Motherboard</option>
              <option value="mouse">Mouse</option>
              <option value="power-supply">Power Supply</option>
              <option value="speaker">Speaker</option>
              <option value="gpu">GPU</option>
              <option value="fan">Fan</option>
            </select>
          </div>
          <div className={styles.select_warper}>
            <label className={errors.condition && styles.errorLabel}>
              Condition
            </label>
            <select {...register("state", { required: true })}>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="used">Used</option>
            </select>
          </div>
          <div className={styles.textarea_warper}>
            <label className={errors.description && styles.errorLabel}>
              Description
            </label>
            <textarea {...register("userDescription", { required: true })} />
          </div>
          <button type="submit">Create</button>
        </form>
      </section>
    </>
  );
};

export default SellUserProduct;
