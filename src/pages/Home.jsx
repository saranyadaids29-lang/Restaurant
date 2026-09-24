import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";

function Home() {

  const popularFoods = foodData.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);
  const activeFood = popularFoods[activeSlide];

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) =>
        (currentSlide + 1) % popularFoods.length
      );
    }, 5000);

    return () => window.clearInterval(slideTimer);
  }, [popularFoods.length]);

  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO TASTY BITES
          </p>

          <h1>
            Delicious Food,
            <br />
            Delivered Fresh 🍴
          </h1>

          <p>
            Enjoy your favourite meals prepared
            with fresh ingredients and lots of love.
          </p>

          <Link to="/menu" className="hero-button">
            Order Now →
          </Link>

        </div>

        <div className="hero-food" aria-live="polite">
          <div
            className="hero-carousel-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {popularFoods.map((food) => (
              <img
                key={food.id}
                src={food.image}
                alt={food.name}
              />
            ))}
          </div>

          <div className="hero-food-caption">
            <span>{activeFood.category}</span>
            <strong>{activeFood.name}</strong>
          </div>

          <div className="hero-carousel-dots" aria-label="Choose a dish">
            {popularFoods.map((food, index) => (
              <button
                key={food.id}
                className={index === activeSlide ? "active" : ""}
                type="button"
                aria-label={`Show ${food.name}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

      </section>


      <section className="section">

        <div className="section-heading">

          <p>OUR SPECIALS</p>

          <h2>
            Popular Dishes
          </h2>

        </div>

        <div className="food-grid">

          {popularFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;