import React from 'react'
import "./Footer.css"
import visa from "../../assets/visa.png"
import paytm from "../../assets/paytm.png"
import upi from "../../assets/upi.png"
import gpay from "../../assets/gpay.png"


const Footer = () => {
  return (
    <>
        <section id='footer' className='bg-dark'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                    <div className='footer-about my-5'>
                        <div className='GhOOM-LO text-white'>
                            <p>GHOOM-LO</p>
                            <p>Who doesn’t love to explore new destinations and fill their bag of memories with extravagant experiences? Well, 
                            you can have amazing trips with GHOOM-LO and make your trip memorable than ever. </p>
                        </div>
                    </div>

                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <div className='related-links my-4'>
                            <ul className='related-ul'>
                                <li><a href='/home'>Home</a></li>
                                <li><a href="/package">Package</a></li>
                                <li><a href='/destination'>Destination</a></li>
                                <li><a href='/activity'>Activity</a></li>
                                <li><a href='/blogs'>Blogs</a></li>
                                <li><a href='/aboutus'>About Us</a></li>
                                <li><a href='/contactus'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                    <div className="we-accept my-5">
                        <ul className='we-accept-ul'>
                            <li><img src={visa} alt="visa-img" className='pay-img'></img></li>
                            <li><img src={paytm} alt="paytm-img" className='pay-img'></img></li>
                            <li><img src={upi} alt ="upi=img" className='pay-img'></img></li>
                            <li><img src={gpay} alt="gpay-img" className='pay-img'></img></li>
                        </ul>
                    </div>
                        
                    </div>
                    
                </div>
                <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="social-nav">
              <h3 className="text-center text-white m-5">Connect With Us</h3>
              <ul className="socila-ul">
                <li className="scial-li"><a href="https://www.facebook.com/profile.php?id=100066772902564" className="facebook"><i className="bi bi-facebook"></i></a></li>
                <li className="scial-li"><a href="https://www.instagram.com/abhinav_mishra_developer/" className="instagram"><i className="bi bi-instagram"></i></a></li>
                <li className="scial-li"><a href="https://www.linkedin.com/in/abhinav-mishra-4998b9162/" className="linkedin"><i className="bi bi-linkedin"></i></a></li>
                <li className="scial-li"><a href="https://twitter.com/Abhinavmishra78" className="twitter"><i className="bi bi-twitter"></i></a></li>
                <li className="scial-li"><a href="https://github.com/Abhinav-Mishra123" className="youtube"><i className="bi bi-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="footer-address">
              <ul className="footer-add-ul">
                <li><i className="bi bi-telephone-fill"></i><a href="tel:9634704880">9634704880</a></li>
                <li><i className="bi bi-envelope"></i><a href="mailto:Contactatabhinavmishra@gmail.com">Contactatabhinavmishra@gmail.com</a></li>
                <li><i className="bi bi-server"></i><a href="https://abhinavtechm.netlify.app/">www.abhinavtechm.netlify.app</a></li>
              </ul>
            </div>
          </div>
        </div>
        <section id="footer-copyright">
      <div className="copyright">
        <p className="text-center">© 2022 All copyright reserved at  ❤ Abhinav Mishra</p>
      </div>
    </section>
            </div>
        </section>
    </>
  )
}

export default Footer