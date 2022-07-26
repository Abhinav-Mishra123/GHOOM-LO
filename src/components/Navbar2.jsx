import React from 'react'
import "./Navbar2.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from "react-router-dom";

const Navbar2 = () => {
 




  return (
    <>
       <Navbar collapseOnSelect expand="lg" className="fixed-top" bg='dark'>
      <Container>
        <Navbar.Brand href="/" className='text-white1  fw-bold' >Ghoom-lo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink  to="/" className="text-white1"  style={({isActive})=>{return {color:isActive ? "red" : " "}}}>Home</NavLink>

            <NavLink to="/package" className="text-white1"  style={({isActive})=>{return {color:isActive ? "red" : " "}}}>Package</NavLink>
 
           <NavLink to="/destination" className="text-white1"  style={({isActive})=>{return {color:isActive ? "red" :" "}}}>Destination</NavLink>
           <NavLink to="/activity" className="text-white1" style={({isActive})=>{return {color:isActive ? "red" :" "}}}>Activity</NavLink>
           <NavLink to="/blogs" className="text-white1"  style={({isActive})=>{return {color:isActive ? "red" :" "}}}>Blogs</NavLink>
           <NavLink to="/aboutus" className="text-white1" style={({isActive})=>{return {color:isActive ? "red" :" "}}}>About Us</NavLink>
           <NavLink to="/contactus" className="text-white1" style={({isActive})=>{return {color:isActive ? "red" :" "}}}>Contact US</NavLink>

           {/* <NavLink to="/darkmode" className="text-white1" style={({isActive})=>{return {color:isActive ? "red" :" "}}}>Dark mode</NavLink> */}
           {/* <Button variant="primary">dark</Button>{' '} */}
          </Nav>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbar2