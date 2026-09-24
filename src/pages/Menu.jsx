import { useState } from "react";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";

function Menu() {

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "South Indian",
    "North Indian",
    "Chinese",
    "Japanese",
    "Drinks",
    "Snacks"
  ];

  const filteredFoods = foodData.filter((food) => {

    const matchesCategory =
      category === "All" ||
      food.category === category;

    const matchesSearch =
      food.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page">

      {/* HERO */}

      <section className="menu-hero">

        <div className="menu-hero-content">

          <span className="menu-label">
            EXPLORE OUR MENU
          </span>

          <h1>
            A World of
            <br />
            <span>Flavours</span>
          </h1>

          <p>
            From traditional Indian favourites to
            delicious Chinese and Japanese classics,
            discover something you'll love.
          </p>

        </div>

        <div className="menu-hero-image">

          <img
            src={foodData[22].image}
            alt="Japanese food"
          />

        </div>

      </section>


      {/* MENU */}

      <section className="menu-section">

        <div className="menu-title">

          <span>OUR COLLECTION</span>

          <h2>
            Choose Your Favourite Food
          </h2>

        </div>


        {/* SEARCH */}

        <div className="menu-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        {/* CATEGORY */}

        <div className="category-buttons">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "active-category"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >

              {item === "All" && "🍽️ "}
              {item === "South Indian" && "🥥 "}
              {item === "North Indian" && "🍛 "}
              {item === "Chinese" && "🥢 "}
              {item === "Japanese" && "🍣 "}
              {item === "Drinks" && "🥤 "}
              {item === "Snacks" && "🍟 "}

              {item}

            </button>

          ))}

        </div>


        {/* RESULT COUNT */}

        <div className="menu-result">

          Showing{" "}
          <strong>
            {filteredFoods.length}
          </strong>{" "}
          items

        </div>


        {/* FOOD */}

        {filteredFoods.length > 0 ? (

          <div className="food-grid">

            {filteredFoods.map((food) => (

              <FoodCard
                key={food.id}
                food={food}
              />

            ))}

          </div>

        ) : (

          <div className="no-food-found">

            <div>🍽️</div>

            <h3>
              No food found
            </h3>

            <p>
              Try searching for another dish.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              View All Foods
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Menu;