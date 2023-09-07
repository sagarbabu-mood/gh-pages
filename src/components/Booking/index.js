import Testimonial from "../Testimonials";

import "./index.css";

const testimonial = [
  {
    imgUlr:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693736583/Ellipse_1_e2blph.png",
    name: "Corey Korsgaard",
    para:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imgUlr:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693736704/Ellipse_1_1_alpiag.png",
    name: "Jakob Aminoff",
    para:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imgUlr:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1693736583/Ellipse_1_e2blph.png",
    name: "Carla Press",
    para:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Booking = () => (
  <>
    <div className="home-con">
      <img
        src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1693734384/image_41_hkf6p2.png"
        alt="stuImg"
        className="img-students"
      />
      <form>
        <h1 className="tropical-head">Book now</h1>
        <p className="tropical-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <label htmlFor="city">city</label>
        <br />
        <input
          type="text"
          placeholder="placeholder"
          id="city"
          className="city-input"
        />
        <br />
        <div className="inputs-div">
          <div>
            <label htmlFor="arrival">Arrival</label>
            <br />

            <input
              type="text"
              className="arrival-input"
              id="arrival"
              placeholder="10 october"
            />
          </div>

          <div>
            <label htmlFor="Departure">Departure</label>
            <br />

            <input
              type="text"
              className="arrival-input"
              id="arrival"
              placeholder="11 october"
            />
          </div>
        </div>

        <div className="inputs-div">
          <div>
            <label htmlFor="Stars">Stars</label>
            <br />

            <input
              type="number"
              className="arrival-input"
              id="Stars"
              placeholder="     4"
            />
          </div>

          <div>
            <label htmlFor="Room">Room</label>
            <br />

            <input
              type="number"
              className="arrival-input"
              id="Room"
              placeholder="      1 "
            />
          </div>
        </div>
      </form>
    </div>
    <div className="tes-div">
      {testimonial.map((each) => (
        <Testimonial single={each} />
      ))}
    </div>
  </>
);
export default Booking;
