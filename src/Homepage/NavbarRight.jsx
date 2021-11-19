import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { HiUserCircle, HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState, useEffect } from "react";
import User from "./User";

const NavbarRight = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [subject, setChat] = useState();

  //   fetch all the users from DB
  const fetchUsers = async (accesstoken) => {
    try {
      let users = await fetch(process.env.REACT_APP_API_REGISTER, {
        method: "GET",
        headers: {
          Authorization: accesstoken,
        },
      });
      if (users.ok) {
        let data = await users.json();
        setUsers(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers(token);
  }, [token]);

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand href="#home">
          <HiUserCircle />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Contacts
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {users.map((user, index) => (
              <User user={user} key={index} />
            ))}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarRight;
