import { Navbar, Container, Nav} from 'react-bootstrap'
import {HiUserCircle, HiOutlineDotsVertical} from 'react-icons/hi'
import {RiDashboard2Line, RiMessage2Fill} from 'react-icons/ri'


const NavbarLeft = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='mr-auto'><HiUserCircle/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#features"><RiDashboard2Line/></Nav.Link>
            <Nav.Link href="#pricing"><RiMessage2Fill/></Nav.Link>
            <Nav.Link><HiOutlineDotsVertical/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLeft;
