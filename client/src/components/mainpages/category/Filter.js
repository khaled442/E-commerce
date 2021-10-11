import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/action/categoryaction";
import { filterProduct } from "../../../redux/action/productAction";

const Filter = () => {
  const [category, setCategory] = useState("");
  const categories = useSelector((state) => state.categoryProduct);
  const handleCategory = (e) => {
    setCategory(e.target.value);
    dispatch(filterProduct(e.target.value))
  };
  

  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="filter_menu" >
      <div className="row"style={{width:"150px",marginLeft:"36px",height:"40px",border:"3px solid rgb(0, 0, 0)",marginTop:"20px"}}>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="all" >All Products</option>
          {categories.categories.map((category) => (
            <option value={ category.name} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
           
      </div>
      
    </div>
  );
};

export default Filter;
