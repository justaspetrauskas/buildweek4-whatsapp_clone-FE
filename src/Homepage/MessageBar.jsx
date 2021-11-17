import { Navbar, Container, Nav, InputGroup, FormControl} from 'react-bootstrap'
import './Homepage.css'
import {GoSmiley} from 'react-icons/go'
import {BsFillMicFill} from 'react-icons/bs'

const MessageBar = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='message-bar'>
  <Container style={{marginLeft:'0rem'}}>
  <Navbar.Brand href="#home" className='pb-2'><GoSmiley/></Navbar.Brand>
  <InputGroup className="my-3 mx-2" style={{width:'72%'}}>
    <FormControl
      placeholder="Type a message"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderRadius:'10vh', height: '4vh', backgroundColor:'#323739'}}
    />
  </InputGroup>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" className='pb-3'><BsFillMicFill/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default MessageBar