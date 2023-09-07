import Card from "../StudentCard";
import ReactSlick from "../ReactSlick";

import "./index.css";

const cardsList = [
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693720279/avatar_to4ogi.png",
    heading: "Jenny Wilson",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693720371/avatar_1_rw4a07.png",
    heading: "Jenny Wilson",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693720484/avatar_2_r1hl24.png",
    heading: "Jenny Wilson",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
];

const Home = () => (
  <>
    <div className="home-con">
      <div>
        {cardsList.map((each) => (
          <Card single={each} />
        ))}
      </div>
      <div>
        <>
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1693723445/Subtract_sjaloc.png"
            alt="roundimg"
            className="round"
          />
        </>
        <h1 className="tropical-head"> Tropical Adventure for Students.</h1>
        <p className="tropical-para">
          Student Tropical Vacation: Relax and Recharge
        </p>
        <ul className="list-items">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit</li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button type="button" className="explore-btn">
          Explore
        </button>
      </div>
    </div>
    <h1>Our Destinations</h1>
    <ReactSlick />
  </>
);

export default Home;
