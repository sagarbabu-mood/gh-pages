import "./index.css";

const Testimonial = (props) => {
  const { single } = props;
  const { imgUrl, name, para } = single;
  return (
    <div className="testimon-card">
      <img src={imgUrl} alt={name} />
      <h1 className="t-head">{name}</h1>
      <p className="t-para">{para}</p>
    </div>
  );
};

export default Testimonial;
