import React, {Component} from "react";
import "../styles/landing.scss";
import "../styles/textStyle.scss";
import mainImg from "../assets/img1.png";
export default class landingPage extends Component {
  render() {
    return (
      <div>
        <div className="header-wrapper">
          <div className="img-wrapper">
            <img src={mainImg} className="mainImg" />
          </div>
          <div className="mainheader h1-style">Hi, I am Mathy, Creative Technologist</div>
        </div>
      </div>
    );
  }
}
