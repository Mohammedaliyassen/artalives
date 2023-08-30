import React, { Component } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./BtnUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BtnUp extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset >= 500) {
      document.getElementById("btn").style.display = "block";
    } else {
      document.getElementById("btn").style.display = "none";
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    
  };

  render() {
    return (
      <FontAwesomeIcon
        icon={faUpload}
        id="btn"
        onClick={this.scrollToTop}
        style={{ display: "none", cursor: "pointer" }}
      />
    );
  }
}

export default BtnUp;
