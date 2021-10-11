import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "",
  content: "",
  category: "",
  sold: "",
  _id: "",
};
const ProductCreate = () => {
  const [product, setProduct] = useState(initialState);
  const [images, setImages] = useState(false);
  const history = useHistory();

  const handleupload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("file not exist");
      if (file.size > 1024 * 1024) return alert("size too large");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("file format is incorrect");
      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/api/upload", formData);
      console.log(res);
      setImages(res.data);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!images) return alert("No Image Upload");

      await axios.post("/api/products", { ...product, images });

      setImages(false);
      setProduct(initialState);
      history.push("/admin");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        marginLeft: "350px",
        marginTop: "30px",
        border: "1px solid rgb(0, 0, 0)",
        height: "475px",
      }}
    >
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleupload} />

        <div id="file_img" >
          <img style={{width:"150px", height:"150px", marginLeft:"100px" }} src={images.url} alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product_id"
          id="product_id"
          required
          className="form-control"
          placeholder="Product ID"
          value={product.product_id}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="content"
          id="content"
          required
          className="form-control"
          placeholder="Content"
          value={product.content}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="category"
          id="category"
          required
          className="form-control"
          placeholder="category"
          value={product.category}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Title"
          className="form-control"
          value={product.title}
          onChange={handleChangeInput}
        />

        <input
          type="text"
          name="price"
          id="price"
          required
          placeholder="Price"
          className="form-control"
          value={product.price}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="sold"
          id="sold"
          required
          placeholder="sold"
          className="form-control"
          value={product.sold}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="description"
          id="description"
          required
          placeholder="Description"
          className="form-control"
          value={product.description}
          onChange={handleChangeInput}
        />
        <Button variant="dark" type="submit">
          Create
        </Button>
        <Link to="/admin">
          <Button style={{ marginLeft: "230px" }} variant="dark" type="submit">
            Go Back
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default ProductCreate;
