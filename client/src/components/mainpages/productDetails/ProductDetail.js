import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prodcutDetail } from "../../../redux/action/productAction";
import { addToCart } from "../../../redux/action/ActionCart";
import "./productDtail.css";
import { Link } from "react-router-dom";

const ProductDetail = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productDetail);
  useEffect(() => {
    if (products && match.params.id !== products._id) {
      dispatch(prodcutDetail(match.params.id));
    }
  }, [dispatch, match, products]);
  const addToCartHandler = () => {
    dispatch(addToCart(products._id, qty));
    history.push("/cart");
  };
  
  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img
          style={{width:"350px",height:"350px"}}
          src={products.images ? products.images.url : ""}
          alt="a wallpaper"
          className="card-img-top"
        />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3> {products.title} </h3>
          <hr />
          <p id="product_price">{products.price}TND</p>
          <div>
            <p>
              Quantity
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(products.sold).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {" "}
                    {x + 1}{" "}
                  </option>
                ))}
              </select>
            </p>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>

          <hr />

          <p>
            Status:
            <span id="stock_status">
              {products.sold > 0 ? "In Stock"  : "Out of Stock"}
            </span>
          </p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>
          {products.description}
          </p>
          <Link to="/products">
            <button
              id="review_btn"
              type="button"
              className="btn btn-primary mt-4"
              data-toggle="modal"
              data-target="#ratingModal"
            >
              Go back
            </button>
          </Link>

          <div className="row mt-2 mb-5">
            <div className="rating w-50">
              <div
                className="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ratingModalLabel">
                        Submit Review
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <textarea
                        name="review"
                        id="review"
                        className="form-control mt-3"
                      ></textarea>

                      <button
                        className="btn my-3 float-right review-btn px-4 text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
