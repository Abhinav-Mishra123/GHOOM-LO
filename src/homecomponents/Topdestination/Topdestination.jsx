import React from "react";
import "./Topdestination.css"
import Slider from "react-slick";
import kashmir2 from "../../assets/kashmir2.jpeg"
import kerala from "../../assets/kerala.jpeg"
import dubai from "../../assets/dubai.jpeg"
import goadest from "../../assets/goadest.jpg"
import maldives2 from "../../assets/maldives2.jpeg"
import singapore from "../../assets/singapore.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../components/context";
// import Topactivity from "../Topacitivity/Topactivity";

const Topdestination = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
        <section id='topdestination'>
            <div className="container">
            <div className='row'>
                <div className='Top-heading'>
                    <h1 className="text-center m-5 ">Top Destination For You</h1>
                </div>
            </div>
            </div>
            <div className="container">
                <div className="row">
                {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div className="img-container">
          <div className="img-second-container">
            <img src={kashmir2} alt="Kashmir"></img>
            <div  className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Jammu & Kashmir</p>
            </div>
            </div>
          </div>
          <div>
          <img src={kerala} alt="Kashmir"></img>
          <div className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Kerala</p>
            </div>
          </div>
          <div>
          <img src={dubai} alt="Kashmir"></img>
          <div className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Dubai</p>
            </div>
          </div>
          <div>
          <img src={goadest} alt="Kashmir"></img>
          <div className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Goa</p>
            </div>
          </div>
          <div>
          <img src={maldives2} alt="Kashmir"></img>
          <div className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Maldive</p>
            </div>
          </div>
          <div>
          <img src={singapore} alt="Kashmir"></img>
          <div className="dest-name">
                <p style={{backgroundColor: darkMode && "#000"}} className="desti hvr-radial-out">Singapore</p>
            </div>
          </div>
        </Slider>
                </div>
            </div>



        </section>
        {/* <Topactivity/> */}
    </>
  )
}

export default Topdestination