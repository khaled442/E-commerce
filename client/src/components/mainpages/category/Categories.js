import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategories,
} from "../../../redux/action/categoryaction";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState("");

  const categories = useSelector((state) => state.categoryProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/category", { name: category });
      alert(res.data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="categories">
      <Link to="/admin">
        <button style={{ marginRight: "50px" }}>Go Back</button>
      </Link>
      <form onSubmit={createCategory}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <div className="col">
        {categories.categories.map((categorie) => (
          <div className="row" key={categorie._id}>
            <p> {categorie.name} </p>
            <div>
              <button>Edit</button>
              <button onClick={() => dispatch(deleteCategory(categorie._id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
