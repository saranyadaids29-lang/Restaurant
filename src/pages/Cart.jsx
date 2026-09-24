import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

  const [showPayment, setShowPayment] = useState(false);

  const {
    cart,
    subtotal,
    delivery,
    total,
    clearCart,
    placeOrder
  } = useCart();


  const handleOrder = () => {

    setShowPayment(true);

  };


  const confirmPayment = () => {

    const order = placeOrder();

    if (order) {

      setShowPayment(false);
      alert(
        `Order placed successfully! 🎉\n\nOrder ID: ${order.id}`
      );

    }

  };

  const downloadQrAsJpeg = () => {
    const qrImage = document.querySelector(".payment-qr-frame img");

    if (!qrImage || qrImage.style.display === "none") {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = qrImage.naturalWidth;
    canvas.height = qrImage.naturalHeight;

    const context = canvas.getContext("2d");
    context.drawImage(qrImage, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }

      const downloadLink = document.createElement("a");
      const downloadUrl = URL.createObjectURL(blob);

      downloadLink.href = downloadUrl;
      downloadLink.download = "tasty-bites-payment-qr.jpg";
      downloadLink.click();
      URL.revokeObjectURL(downloadUrl);
    }, "image/jpeg", 0.95);
  };


  if (cart.length === 0) {

    return (

      <div className="cart-page">

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>
            Your cart is empty
          </h2>

          <p>
            Looks like you haven't added anything
            to your cart yet.
          </p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Explore Menu
          </Link>

        </div>

      </div>

    );

  }


  return (

    <div className="cart-page">

      <div className="page-title">

        <span>
          YOUR ORDER
        </span>

        <h1>
          Shopping Cart 🛒
        </h1>

      </div>


      <div className="cart-layout">


        {/* LEFT */}

        <div className="cart-items">

          <div className="cart-items-header">

            <h2>
              Your Items
            </h2>

            <span>
              {cart.length} items
            </span>

          </div>


          {cart.map((item) => (

            <CartItem
              key={item.id}
              item={item}
            />

          ))}


          <button
            className="clear-cart-button"
            onClick={clearCart}
          >
            🗑 Clear Cart
          </button>

        </div>


        {/* RIGHT */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{subtotal}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span>
              ₹{delivery}
            </span>

          </div>


          <div className="summary-row discount-row">

            <span>
              Discount
            </span>

            <span className="discount">
              -₹0
            </span>

          </div>


          <div className="summary-total">

            <span>
              Total
            </span>

            <span>
              ₹{total}
            </span>

          </div>


          <button
            className="checkout-button"
            onClick={handleOrder}
          >
            Place Order →
          </button>


          <Link
            to="/menu"
            className="continue-shopping"
          >
            ← Continue Shopping
          </Link>

        </div>

      </div>

      {showPayment && (
        <div
          className="payment-overlay"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowPayment(false);
            }
          }}
        >
          <section
            className="payment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-title"
          >
            <button
              className="payment-close"
              type="button"
              aria-label="Close payment"
              onClick={() => setShowPayment(false)}
            >
              ×
            </button>

            <p className="payment-eyebrow">SECURE CHECKOUT</p>

            <h2 id="payment-title">Pay for your order</h2>

            <p className="payment-copy">
              Scan the QR code with any UPI app to pay your order total.
            </p>

            <div className="payment-qr-frame">
              <img
                src="/payment-qr.jpeg"
                alt="Restaurant payment QR code"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />

              <div className="payment-qr-placeholder">
                <span>▦</span>
                <strong>Add your QR code</strong>
                <small>Place payment-qr.jpeg in the public folder</small>
              </div>
            </div>

            <button
              className="payment-download-button"
              type="button"
              onClick={downloadQrAsJpeg}
            >
              Download QR as JPEG
            </button>

            <div className="payment-total">
              <span>Amount to pay</span>
              <strong>₹{total}</strong>
            </div>

            <button
              className="payment-confirm-button"
              type="button"
              onClick={confirmPayment}
            >
              I have paid ₹{total}
            </button>

            <button
              className="payment-cancel-button"
              type="button"
              onClick={() => setShowPayment(false)}
            >
              Cancel
            </button>
          </section>
        </div>
      )}

    </div>

  );
}

export default Cart;