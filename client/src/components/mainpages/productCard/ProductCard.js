import React from "react";
import { Button } from "react-bootstrap";
import "./productCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const loading = useSelector((state) => state.products);

  console.log(product);
  return (

    <div className="card text-center bg-dark animate__animated animate__fadeInUp mt-3">
      <div className="overflow">
        <img
          src={product.images.url}
          alt="a wallpaper"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">
          Produit : <span>{product.title}</span>
        </h4>
        <h4 className="card-title">
          Category : <span>{product.category}</span>
        </h4>

        <h4 className="card-title">
          Prix : <span>{product.price} TND</span>
        </h4>
        <Link to={`/products/${product._id}`}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
