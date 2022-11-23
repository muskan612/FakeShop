import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Products.css";

const Products = ({ items }) => {
  const [products, setProducts] = useState(items);
  // console.log(products);
  const handleClick = (e) => {
    e.preventDefault();
    let input = document.getElementById("sort").value;
    if (input === "all categories") setProducts(items);
    else setProducts(items.filter((item) => item.category === input));
  };

  return (
    <>
      <Navbar />
      <div className="product-list-box">
        <header>Products</header>
        <section className="sorting">
          <select id="sort" onClick={handleClick}>
            <option value="all categories">All categories</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </select>
        </section>
        <div className="items">
          {products.map((item) => {
            const { id, title, image, price } = item;
            let path = `/products/${id}`;
            return (
              <Link to={path} key={id} style={{ textDecoration: "none" }}>
                <div className="item-card">
                  <img style={{ width: "150px" }} src={image} alt={image} />
                  <div className="info">
                    <section className="title">{title}</section>
                    <section className="price">${price}</section>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
