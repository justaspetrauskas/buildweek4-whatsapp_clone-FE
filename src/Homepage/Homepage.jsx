import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import UsersContainer from "./UsersContainer";
import MessageBar from "./MessageBar";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Homepage.css";

const Homepage = () => {
  const user = useSelector((state) => state.user.userData);
  let token = "Bearer " + window.localStorage.getItem("user_Token");
  return (
    <>
      <Container fluid>
        <Row className="chat-header">
          <Col className="col-2 px-0">
            <NavbarLeft user={user} />
          </Col>
          <Col className="col-10 px-0">
            <NavbarRight user={user} token={token} />
          </Col>
        </Row>

        <Row className="main-window">
          <Col className="col-2 px-0 left-side-bar">
            <UsersContainer token={token} />
          </Col>
          <Col className="col-10 px-0 back-image">
            <MessageBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
