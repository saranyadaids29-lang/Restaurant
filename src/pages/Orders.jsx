import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Orders() {

  const { orders } = useCart();


  if (orders.length === 0) {

    return (
      <div className="empty-cart">

        <div className="empty-icon">
          📦
        </div>

        <h1>No Orders Yet</h1>

        <p>
          Your placed orders will appear here.
        </p>

        <Link
          to="/menu"
          className="hero-button"
        >
          Order Food
        </Link>

      </div>
    );

  }


  return (
    <div className="page">

      <div className="page-header">

        <p>ORDER HISTORY</p>

        <h1>
          My Orders 📦
        </h1>

      </div>


      <div className="orders-list">

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <div className="order-header">

              <div>
                <h3>
                  Order #{order.id}
                </h3>

                <p>
                  {order.date}
                </p>
              </div>

              <span className="status">
                🟢 {order.status}
              </span>

            </div>


            <div className="order-foods">

              {order.items.map((item) => (

                <div
                  className="order-food"
                  key={item.id}
                >

                  <span>
                    {item.emoji} {item.name}
                  </span>

                  <span>
                    × {item.quantity}
                  </span>

                </div>

              ))}

            </div>


            <div className="order-total">

              <span>
                Total
              </span>

              <strong>
                ₹{order.total}
              </strong>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;