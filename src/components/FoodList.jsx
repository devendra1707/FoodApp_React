import FoodItems from "./FoodItems";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <h3>
          <FoodItems setFoodId={setFoodId} key={food.id} food={food} />
        </h3>
      ))}
    </div>
  );
}
