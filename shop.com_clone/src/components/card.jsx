import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomPrevArrow from "../components/prev";
import CustomNextArrow from "../components/next";

const Carousel = ({ data }) => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <div>
            <img
              style={{ width: "300px", height: "400px" }}
              src={item.image}
              alt={item.alt}
            />
            <p>
              <b>{item.title}</b>
            </p>
            <p>
              <b>${item.price}</b>
            </p>
            <p>Rating:-{item.rating}/5</p>
            <p style={{ color: " #09a79d" }}>free Shipping with $125 orders</p>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
