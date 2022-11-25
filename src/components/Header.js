import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='nav-header'>
      <Container>
        <Navbar.Brand><Link to='/dashboard' style={{color:"white",textDecoration:"none"}}>Admin Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Link to='/add' style={{marginLeft:"35px",color:"white",textDecoration:"none"}}>Add Users</Link>
            <Link to='/records' style={{marginLeft:"35px",color:"white",textDecoration:"none"}}>All Records</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header