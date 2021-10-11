import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
} from "../../../redux/action/productAction";
import "../products/product.css";
import "../productCard/productCard.css";
import { Button } from "react-bootstrap";
import UpdateProduct from "./UpdateProduct";
import "./adminpage.css";

const AdminPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
  
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {products.products.map((product) => (
            <div className="col-md-4">
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
                    Produit :<span> {product.title}</span>
                  </h4>
                  <h4 className="card-title">
                    Category :<span> {product.category}</span>
                  </h4>
                  <h4 className="card-title">
                    Description :<span>{product.description}</span>
                  </h4>
                  <h4 className="card-title">
                    Content : <span>{product.content}</span>
                  </h4>
                 
                  <h4 className="card-title">
                    Stock : <span>{product.sold}</span>
                  </h4>

                  <h4 className="card-title">
                    Prix : <span>{product.price}TND</span>
                  </h4>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      className="btn"
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                        getProducts();
                      }}
                    >
                      Delete
                    </Button>
                    <UpdateProduct product={product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div>
    //   <ProductCreate />
    //   <div className="list">
    //     {products.products.map((product) => (
    //       <div key={product._id} className="card">
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Body>
    //             <CardImg className="card-image" src={product.images.url} />
    //             <Card.Title className="title">{product.title}</Card.Title>
    //             <Card.Text className="sous-title">
    //               <h4>{product.price}</h4>
    //               <h4>{product.description}</h4>
    //               <h4>{product.content}</h4>
    //               <h4>{product.sold}</h4>
    //               <h4>{product.category}</h4>
    //             </Card.Text>
    //             <div className="d-flex justify-content-around">
    //               <Button
    //                 variant="primary"
    //                 className="btn"
    //                 onClick={() => {
    //                   dispatch(deleteProduct(product._id));
    //                   getProducts();
    //                 }}
    //               >
    //                 Delete
    //               </Button>
    //               <UpdateProduct product={product} />
    //             </div>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AdminPage;
