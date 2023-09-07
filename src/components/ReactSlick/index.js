import Slider from "react-slick";
import SlickCard from "../SlickCard";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Slicks = [
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725437/card-image_leqkfw.png",
    head: "Harvard University",
    para: "Cambridge Massachusetts UK",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725491/card-image_1_r7s3zf.png",
    head: "Oxford University",
    para: "Oxford, England",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },

  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725537/card-image_2_itovim.png",
    head: "Stanford University",
    para: "Stanford, California",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725585/card-image_3_zulhgv.png",
    head: "Nanyang Technological University",
    para: "Stanford, California",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725437/card-image_leqkfw.png",
    head: "Harvard University",
    para: "Cambridge, Massachusetts, UK",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725491/card-image_1_r7s3zf.png",
    head: "Oxford University",
    para: "Oxford, England",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725537/card-image_2_itovim.png",
    head: "Stanford University",
    para: "Stanford, California",
    icon:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693725807/Icons_xf0f32.png",
  },
];

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Slicks.map((each) => (
          <SlickCard single={each} />
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlick;
