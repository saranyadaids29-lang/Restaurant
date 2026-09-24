import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "../utils/auth";

const fallbackImage =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80";

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleAddToCart() {
    if (!isSignedIn()) {
      navigate("/login", {
        state: { food }
      });
      return;
    }

    addToCart(food);
  }

  return (
    <div className="food-card">

      <div className="food-image-wrapper">

        <img
          src={food.image || fallbackImage}
          alt={food.name}
          className="food-image"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />

        <div className="rating">
          ⭐ {food.rating}
        </div>

      </div>

      <div className="food-content">

        <span className="cuisine">
          {food.cuisine}
        </span>

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">

          <div className="price">
            ₹{food.price}
          </div>

          <button
            onClick={handleAddToCart}
          >
            + Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;