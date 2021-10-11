import React, { useEffect } from "react";
import { getProducts } from "../../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./product.css";
import ProductCard from "../productCard/ProductCard";
import Filter from "../category/Filter";

const Products = () => {
  const dispatch = useDispatch();
  const {products,categorySelected} = useSelector((state) => state.products);
  console.log(products)
  console.log(products.filter((product) => product.category !== categorySelected ))

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (

    <div>
      <Filter/>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {products.filter((product) => {
          if (categorySelected !== "all" ) return product.category === categorySelected
          else return true 
        }).map((product) => (
          <div className="col-md-4">
            <ProductCard product={product} key={product._id} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
