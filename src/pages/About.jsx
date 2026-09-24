const aboutImages = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
];

function About() {

  return (
    <div className="about-page">

      <div className="page-header">

        <p>ABOUT US</p>

        <h1>
          About Tasty Bites 🍴
        </h1>

      </div>

      <div className="about-hero">

        <div className="about-copy">
          <h2>
            Good Food, Great Memories
          </h2>

          <p>
            Tasty Bites began with a simple idea: serving food that feels like home,
            made with fresh ingredients and a lot of heart. From comforting classics
            to exciting global flavours, every dish is prepared to bring people together.
          </p>

          <p>
            We believe that a great restaurant is more than just food. It is the aroma
            of a fresh meal, the warmth of a welcoming kitchen, and the joy of sharing
            a table with family and friends.
          </p>

          <div className="about-stats">
            <div>
              <strong>10+</strong>
              <span>Years in service</span>
            </div>
            <div>
              <strong>2k+</strong>
              <span>Happy customers</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Signature dishes</span>
            </div>
          </div>
        </div>

        <div className="about-photo-card">
          <img
            src={aboutImages[0]}
            alt="Chef preparing food"
          />
        </div>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <div className="about-icon">🥘</div>
          <h3>Fresh Ingredients</h3>
          <p>
            We cook with premium vegetables, quality spices, and carefully sourced ingredients
            to deliver rich flavours in every bite.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>
            Our kitchen and delivery team work together so your food arrives fresh, hot,
            and ready to enjoy wherever you are.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">⭐</div>
          <h3>Customer First</h3>
          <p>
            From the first order to the last bite, we focus on taste, service, and a smooth
            food experience that keeps people coming back.
          </p>
        </div>
      </div>

      <div className="about-gallery">
        <img src={aboutImages[1]} alt="Restaurant ambience" />
        <img src={aboutImages[2]} alt="Plated dish" />
      </div>

    </div>
  );
}

export default About;