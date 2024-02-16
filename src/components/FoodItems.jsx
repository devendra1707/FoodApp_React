import styles from "./fooditem.module.css";

export default function FoodItems({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          Viwe Recipe
        </button>
      </div>
    </div>
  );
}
