import "./index.css";

const SlickCard = (props) => {
  const { single } = props;
  const { imgUrl, head, para, icon } = single;
  return (
    <>
      <div className="slickCard">
        <img src={imgUrl} alt={head} className="slice-img" />
        <h1 className="sliceHead">{head}</h1>
        <div className="con-for-dots-para">
          <p className="slice-para">{para}</p>
          <img src={icon} alt="more" className="dots-img" />
        </div>
      </div>
    </>
  );
};
export default SlickCard;
