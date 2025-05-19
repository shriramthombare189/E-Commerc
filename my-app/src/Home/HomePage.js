import React, { useState } from "react";

const trendingProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹1,39,900",
    img: "https://gizmobo.com/wp-content/uploads/2022/08/Apple-iPhone-14-Pro-gold.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    img: "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv-mo.jpg",
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: "₹64,999",
    img: "https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-black.png",
  },
  {
    id: 4,
    name: "Pixel 8 Pro",
    price: "₹1,06,999",
    img: "https://tse4.mm.bing.net/th?id=OIP.4nm9l5gLjD0F25Na_s0eDAHaEK&pid=Api&P=0&h=180",
  },
];


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredProducts = trendingProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestions = trendingProducts
    .map((p) => p.name)
    .filter(
      (name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        name.toLowerCase() !== searchTerm.toLowerCase()
    );

  const onSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="container my-5">
      {/* Search Bar */}
      <div className="mb-4 position-relative" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => {
            if (searchTerm) setShowSuggestions(true);
          }}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul
            className="list-group position-absolute w-100 shadow"
            style={{ zIndex: 10, maxHeight: "150px", overflowY: "auto" }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Trending Products */}
      <h2 className="text-center mb-4">Trending Products</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-6 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold">{product.price}</p>
                  <button className="btn btn-primary mt-auto">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;


