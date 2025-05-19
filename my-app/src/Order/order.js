import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: "₹79,999",
    img: "https://gizmobo.com/wp-content/uploads/2022/08/Apple-iPhone-14-Pro-gold.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: "₹69,999",
    img: "https://tse1.mm.bing.net/th?id=OIP.XwJ889hbrMie6iA452AivgHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "OnePlus 11",
    price: "₹59,999",
    img: "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-black.png",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    price: "₹1,14,900",
    img: "https://tse2.mm.bing.net/th?id=OIP.-7am95RpU-G5FDJ8nXG7vgHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "iPad Pro",
    price: "₹82,900",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1664387291929",
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,990",
    img: "https://tse3.mm.bing.net/th?id=OIP.pEFfyZagbX3Q3iKYJN9vrgHaHa&pid=Api&P=0&h=180",
  },
];

const Order = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Order Products</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{product.name}</h5>
                  <p className="text-muted">Price: {product.price}</p>
                  <button className="btn btn-success mt-auto w-100">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-danger">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Order;
