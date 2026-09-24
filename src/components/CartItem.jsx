import { useCart } from "../context/CartContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80";

function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (

    <div className="cart-item">

      {/* FOOD IMAGE */}

      <div className="cart-item-image-wrapper">

        <img
          src={item.image || fallbackImage}
          alt={item.name}
          className="cart-item-image"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />

      </div>


      {/* FOOD DETAILS */}

      <div className="cart-item-details">

        <span className="cart-item-cuisine">
          {item.cuisine}
        </span>

        <h3>
          {item.name}
        </h3>

        <p>
          ₹{item.price} each
        </p>

      </div>


      {/* QUANTITY */}

      <div className="quantity-controls">

        <button
          onClick={() =>
            decreaseQuantity(item.id)
          }
        >
          −
        </button>

        <span>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            increaseQuantity(item.id)
          }
        >
          +
        </button>

      </div>


      {/* ITEM TOTAL */}

      <div className="cart-item-total">

        ₹{item.price * item.quantity}

      </div>


      {/* REMOVE */}

      <button
        className="remove-button"
        onClick={() =>
          removeFromCart(item.id)
        }
      >
        Remove
      </button>

    </div>

  );
}

export default CartItem;