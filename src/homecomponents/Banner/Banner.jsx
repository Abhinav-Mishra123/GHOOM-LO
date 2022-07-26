import React from 'react'
import "./Banner.css"
import Carousel from 'react-bootstrap/Carousel';
import goa from "../../assets/goa.jpeg";
import dubai from "../../assets/dubai.jpeg";
import maldives from "../../assets/maldives.jpeg";
import { useContext } from 'react';
import { ThemeContext } from '../../components/context';


const Banner = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>



<Carousel>

      <Carousel.Item>
      
        <img
          className="d-block w-100 img-height"
          src={goa}
          alt="First slide"
        />
        
<section id='input-container'>
<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
    <div style={{backgroundColor: darkMode && "#000"}} className='input-seacrh-white'>
      <div className='input-field'>
      <p className='where'>Where you wanna go</p>
      <div className="form-group formgrpup">
  <input type="text" class="form-control formcontrol" id="exampleFormControlInput1" placeholder="Search anything"/>
  <button className='btn btn-primary seacrhbtn' id='search'>Search</button>
</div>
      </div>
    </div>
    </div>
  </div>
</div>
</section>
        <Carousel.Caption>
          <h3>Don't Quit Your Day Dream</h3>
          <p>Live with no excuses and travel with no regrets</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-height"
          src={dubai}
          alt="Second slide"
        />
        
<section id='input-container'>
<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
    <div style={{backgroundColor: darkMode && "#000"}} className='input-seacrh-white'>
      <div className='input-field'>
      <p className='where'>Where you wanna go</p>
      <div className="form-group formgrpup">
  <input type="text" class="form-control formcontrol" id="exampleFormControlInput1" placeholder="Search anything"/>
  <button className='btn btn-primary seacrhbtn' id='search'>Search</button>
</div>
      </div>
    </div>
    </div>
  </div>
</div>
</section>

        <Carousel.Caption>
          <h3>There's no better place than Dubai</h3>
          <p>Going to Dubai, be back neve</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-height"
          src={maldives}
          alt="Third slide"
        />
        
<section id='input-container'>
<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
    <div style={{backgroundColor: darkMode && "#000"}} className='input-seacrh-white'>
      <div className='input-field'>
      <p className='where'>Where you wanna go</p>
      <div className="form-group formgrpup">
  <input type="text" class="form-control formcontrol" id="exampleFormControlInput1" placeholder="Search anything"/>
  <button className='btn btn-primary seacrhbtn' id='search'>Search</button>
</div>
      </div>
    </div>
    </div>
  </div>
</div>
</section>

        <Carousel.Caption>
          <h3>Happiness comes in waves</h3>
          <p>
          Once upon a time in the Maldives…
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Banner