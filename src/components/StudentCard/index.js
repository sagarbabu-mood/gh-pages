import "./index.css";

const Card = (props) => {
  const { single } = props;
  const { imgUrl, heading, para } = single;

  return (
    <div className="card">
      <img src={imgUrl} alt={heading} className="card-img" />

      <div className="card-content">
        <h1 className="card-head">{heading}</h1>
        <p className="card-para">{para}</p>
      </div>
    </div>
  );
};

export default Card;
