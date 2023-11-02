import ReactCardSlider from "react-card-slider-component";
import styles from "./homeSlider.module.css";

const slides = [
  {
    image: "https://picsum.photos/200/300",
    title: "This is a title",
    description: "This is a description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/600/500",
    title: "This is a second title",
    description: "This is a second description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/700/600",
    title: "This is a third title",
    description: "This is a third description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/200/300",
    title: "This is a fifth title",
    description: "This is a fifth description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/300/400",
    title: "This is a seventh title",
    description: "This is a seventh description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description",
    clickEvent: () => {
      console.log("Card clicked");
    },
  },
];

const HomeSlider = () => {
  return (
    <div className={styles.productList_container}>
      <h2 className={styles.productList_title}>Featured Products</h2>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default HomeSlider;
