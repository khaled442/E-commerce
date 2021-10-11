import React from "react";
import { Carousel } from "react-bootstrap";

const HomePages = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://logos-download.com/wp-content/uploads/2016/04/Telefunken_logo_emblem.png"
          alt="Telefunken"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
          alt="Samsung"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyHgvxB_1wvDfZGkijJUeuUCIGVDaQvuDyymBeOZVKgJtUjAlFyEhzWZbeiYtW90A284&usqp=CAU"
          alt="Lg"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default HomePages;
