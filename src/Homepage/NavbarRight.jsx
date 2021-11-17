import { Navbar, Container, Nav} from 'react-bootstrap'
import {HiUserCircle, HiOutlineDotsVertical} from 'react-icons/hi'
import {MdOutlineSearch} from 'react-icons/md'

const NavbarRight = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><HiUserCircle/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Sai Krishna</Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link><MdOutlineSearch/></Nav.Link>
      <Nav.Link href="#deets"><HiOutlineDotsVertical/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarRight