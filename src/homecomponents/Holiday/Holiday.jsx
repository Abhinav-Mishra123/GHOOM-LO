import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Holiday.css"
import kashmir1 from "../../assets/kashmir1.jpeg"
import kashmir2 from "../../assets/kashmir2.jpeg"
import kashmir3 from "../../assets/kashmir3.jpeg"
import Sightseeing from "../../assets/Sightseeing.png"
import Stay from "../../assets/Stay.png"
import Transfers from "../../assets/Transfers.png"
import Meals from "../../assets/Meals.png"
import dubai from "../../assets/dubai.jpg"
import shimla from "../../assets/shimla.jpeg"
import kerala from "../../assets/kerala.jpeg"
import { ThemeContext } from '../../components/context';
import { useContext } from 'react';

const Holiday = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  

  return (
    <>


    {/* Modal  */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Query Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <InputGroup className="mb-3">
        <Form.Control
        type="text" className="formcontr"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
        type="phone" className="formcontr"
          placeholder="Phone No."
          aria-label="Phone No."
          aria-describedby="basic-addon1"
        />
        
      </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email" className="formcontr"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label> */}
              <Form.Control className="formmesage" placeholder="Message" as="textarea"  rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    {/* end */}
    <section id='special-package'>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center my-5'>Special Package</h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={kashmir1} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>34% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>Best Travel Agent In Srinagar For Kashmir Tour Packages</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>05 Nights & 06 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'> Kashmir</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:kashmipackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>kashmipackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">21210</del><span className='rokra'>13999/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={kashmir2} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>24% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>Best Tour Operator For Kashmir Tour Packages In Srinagar</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>06 Nights & 07 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'> Kashmir</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:kashmipackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>kashmipackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">21050</del><span className='rokra'>15999/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={kashmir3} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>20% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>Best Travel Agency In Srinagar For Kashmir Holiday Packages</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>07 Nights & 08 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'> J & K</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:kashmipackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>kashmipackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">24999</del><span className='rokra'>19999/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row second-row my-5'>
          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={shimla} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>20% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>Best of Shimla Vacation</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>03 Nights & 04 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'> Shimla</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:shimlapackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>shimlapackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">25000</del><span className='rokra'>20000/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={kerala} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>12% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>The Backwater Kerala Tour</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>02 Nights & 02 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'> Kerala</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:keralapackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>keralapackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">15000</del><span className='rokra'>13200/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 col-xs-12 col-lg-4'>
            <div className='package-container'>
            <div className='inner-container'>
              <div className='img-container'>
                <img src={dubai} alt="dubai img"/>
              </div>
              <div className='offer'>
                <p>30% OFF</p>
              </div>
              </div>
              <div className='second-container'>
                <h6>The Best Dubai Tour</h6>
                <div className='location'>
                  <p className='dura'><b>Duuration:</b></p>
                  <p className='nights'>07 Nights & 08 days</p>
                  <p className='dura'><b>Location:</b></p>
                  <p  className='nights'>Dubai</p>
                </div>
              </div>
              <hr className='hr'/>
              <div className='third-container'>
              <div className="inclusion">
              <ul className='inclusion-ul'>
                <li className='inclusion-li'><img src={Transfers} alt="Transfers"></img><span className='inclusion-font'>Transfer</span></li>
                <li className='inclusion-li'><img src={Meals} alt="Meals"></img><span className='inclusion-font'>Meal</span></li>
                <li className='inclusion-li'><img src={Stay} alt="Stay"></img><span className='inclusion-font'>Hotel</span></li>
                <li className='inclusion-li'><img src={Sightseeing} alt="sightseeing"></img><span className='inclusion-font'>Sightseeing</span></li>

              </ul>

              

              </div>
              </div>
              <hr className='hr'/>
              <div className='fourth-container'>
                <p>Contact us</p>
                <div className='Quick-contact'>
                  <span><i class="bi bi-telephone-fill col-same"></i><a href='tel:9876543210' className='mx-1' style={{color :darkMode && "#fff" }}>9876543210</a></span>
                  <span><i class="bi bi-envelope-fill col-same col-mar"></i><a href='mailto:dubaipackage@gmail.com' className="mar-ri mx-2" style={{color :darkMode && "#fff" }}>dubaipackage@gmail.com</a></span>
                </div>
              </div>
              <hr className='hr'/>
              <div className='fifth-container'>
                <div className='rupee-container'>
                   <p><i class="bi bi-currency-rupee"></i><span><del className="rup">45999</del><span className='rokra'>32199/- </span><small>per person</small></span></p>
                   <button className="btn btn-dark hvr-shutter-out-horizontal" onClick={handleShow}>Enquiry Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>

    </>
  )
}

export default Holiday