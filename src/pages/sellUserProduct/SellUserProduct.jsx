import { useForm } from "react-hook-form";
import PageBanner from "../../Components/pageBanner/PageBanner";
import styles from "./sellUserProducts.module.css";

const SellUserProduct = () => {
  const { handleSubmit, register, control, formState } = useForm({
    mode: "onChange",
  });

  const { isValid, errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
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
            <span>$</span>
          </div>
          <div className={styles.input_warper}>
            <label className={errors.color && styles.errorLabel}>Color</label>
            <input {...register("color", { required: true })} />
          </div>
          <div className={styles.input_warper}>
            <label className={errors.image && styles.errorLabel}>
              Image URL
            </label>
            <input {...register("image", { required: true })} />
          </div>
          <div className={styles.select_warper}>
            <label className={errors.type && styles.errorLabel}>Type</label>
            <select {...register("type", { required: true })}>
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
            <select {...register("condition", { required: true })}>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="used">Used</option>
            </select>
          </div>
          <div className={styles.textarea_warper}>
            <label className={errors.description && styles.errorLabel}>
              Description
            </label>
            <textarea {...register("description", { required: true })} />
          </div>
          <button type="submit">Create</button>
        </form>
      </section>
    </>
  );
};

export default SellUserProduct;
