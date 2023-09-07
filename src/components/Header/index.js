import { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./index.css";

class Header extends Component {
  state = { isListShow: false };

  togleBetweenList = () => {
    this.setState((prevState) => ({ isListShow: !prevState.isListShow }));
  };

  render() {
    const { isListShow } = this.state;
    return (
      <div>
        <div className="heder-con">
          <button
            type="button"
            onClick={this.togleBetweenList}
            className="button-icon"
          >
            <AiOutlineMenu />
          </button>

          <ul className="ul-for-max">
            <li className="list-items-for-max">Home</li>
            <li className="list-items-for-max">About</li>
            <li className="list-items-for-max">Schedule</li>
            <li className="list-items-for-max">Membership</li>
            <li className="list-items-for-max">Pricing</li>
          </ul>

          <div className="offers-div">
            <h1 className="offers-head">Offers</h1>
            <button type="button" className="courses-btn">
              Course
            </button>
          </div>
        </div>
        {isListShow && (
          <ul className="li">
            <li>Home</li>
            <li>About</li>
            <li>Schedule</li>
            <li>Membership</li>
            <li>Pricing</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Header;
