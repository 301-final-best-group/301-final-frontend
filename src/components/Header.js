import React from 'react';
import "../header.css";
import { Container, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react'

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="" variant="light" className="navbar">
        <Navbar.Brand className="navHeader">Travel Bucket</Navbar.Brand>
        <Container className='navLink'>
          <NavItem className='navItem'><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem className='navItem'><Link to="/profile" className="nav-link">My Bucket</Link></NavItem>
          <NavItem className='navItem'><Link to="/aboutus" className="nav-link">About Us</Link></NavItem>
        <NavItem>{this.props.auth0.isAuthenticated ? <Logout /> : <Login />}</NavItem>
        </Container>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
