import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BsArrowRight } from "react-icons/bs"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
import img6 from "../assets/images/1.jpg"
import img7 from "../assets/images/2.jpg"
import img8 from "../assets/images/4.jpg"
import img9 from "../assets/images/3.jpg"

function Trips() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <TripsContainer>
      <TripsHeading>Our Favorite Destination</TripsHeading>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="details city1">
            <h2>
              Jaipur <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="details city2">
            <h2>
              Jodhpur <span className="job-title">Sun City</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="details city3">
            <h2>
              Udaipur <span className="job-title">City of Lakes</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="details city4">
            <h2>
              Jaisalmer <span className="job-title">Golden City</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="details city5">
            <h2>
              Bundi <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="details city6">
            <h2>
              Ranthambhore{" "}
              <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="details city7">
            <h2>
              Pushkar <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="details city8">
            <h2>
              Kota <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img9} alt="" />
            </div>
          </div>
          <div className="details city9">
            <h2>
              Chittorgarh{" "}
              <span className="job-title">Capital of Rajasthan</span>
            </h2>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </Slider>
    </TripsContainer>
  )
}

export default Trips

const TripsContainer = styled.div`
  padding: 5rem;
`

const TripsHeading = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0;
  font-weight: bold;
`
