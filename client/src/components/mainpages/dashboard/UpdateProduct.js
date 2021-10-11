import React, { useEffect, useState } from "react";
import { updateProduct } from "../../../redux/action/productAction";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCategories } from "../../../redux/action/categoryaction";

const UpdateProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [sold, setSold] = useState(product.sold);
  const [content, setContent] = useState(product.content);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [images, setImages] = useState(false);
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.updateProduct);
  const { categories } = useSelector((state) => state.categoryProduct);

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
  
  useEffect(() => {
   dispatch(getCategories())
  }, [dispatch])
  const handleCategory = (e) => {
    setCategory(e.target.value);

  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleupload}
            />

            <div id="file_img">
              <img
                style={{ width: "250px", height: "250px", marginLeft: "100px" }}
                src={product.images.url}
                alt=""
              />
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              type="text"
              className="form-control"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <select name="category" value={category} onChange={handleCategory}>
              {categories.map((categorie) => (
                <option value={categorie.name} key={categorie._id}>
                  {categorie.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />

            <input
              type="number"
              className="form-control"
              placeholder="Stock"
              onChange={(e) => setSold(e.target.value)}
              value={sold}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch(
                updateProduct({
                  title,
                  price,
                  sold,
                  description,
                  images,
                  content,
                  category
                })
              );
              // dispatch(getProducts());
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
