import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <h1>companyTitle</h1>
          <p>company slogan ideas</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
