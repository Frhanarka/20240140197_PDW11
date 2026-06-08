import "./App.css";

function App() {
  const coffees = [
    {
      name: "Cappuccino",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      name: "Latte",
      price: "$5.00",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      name: "Espresso",
      price: "$3.50",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">☕ Coffee Haven</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="overlay">
          <h1>Crafted Coffee For Every Mood</h1>
          <p>
            Experience premium coffee made from selected beans around the world.
          </p>

          <button>Order Now</button>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>25K+</h2>
          <p>Customers</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Coffee Variants</p>
        </div>

        <div>
          <h2>15</h2>
          <p>Branches</p>
        </div>

        <div>
          <h2>4.9★</h2>
          <p>Rating</p>
        </div>
      </section>

      <section className="menu">
        <h2>Popular Coffee</h2>

        <div className="card-container">
          {coffees.map((coffee, index) => (
            <div className="card" key={index}>
              <img src={coffee.image} alt={coffee.name} />
              <h3>{coffee.name}</h3>
              <p>{coffee.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>About Our Coffee</h2>

          <p>
            We believe every cup tells a story. Our beans are ethically sourced,
            freshly roasted, and carefully brewed to create an unforgettable
            coffee experience.
          </p>
        </div>
      </section>

      <section className="testimonial">
        <h2>Customer Reviews</h2>

        <div className="reviews">
          <div className="review">
            <p>
              "Best coffee shop I've ever visited. Amazing atmosphere and taste!"
            </p>
            <h4>- Sarah</h4>
          </div>

          <div className="review">
            <p>
              "Their cappuccino is incredible. Definitely coming back again."
            </p>
            <h4>- Michael</h4>
          </div>
        </div>
      </section>

      <footer>
        <h3>Coffee Haven</h3>
        <p>Premium Coffee Experience Since 2020</p>
      </footer>
    </div>
  );
}

export default App;