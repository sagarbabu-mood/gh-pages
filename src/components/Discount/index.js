import "./index.css";

const Discounts = () => (
  <div className="home-con">
    <div>
      <p className="tropical-para">Get 20% off for student</p>
      <h1 className="tropical-head">
        Student discounts available. Get ready for some fun in the sun!
      </h1>
      <ul className="list-items">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit</li>
        <li>tortor id euismod habitant</li>
        <li>Sed suspendisse id in ultrices</li>
      </ul>
      <button type="button" className="explore-btn">
        Explore More
      </button>
    </div>
    <img
      src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1693733741/image_40_tvpgiu.png"
      alt="imageStudent"
      className="img-students"
    />
  </div>
);
export default Discounts;
