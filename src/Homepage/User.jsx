import React from "react";
import { Row, Col } from "react-bootstrap";
import { HiUserCircle } from "react-icons/hi";

const User = ({ user }) => {
  return (
    <>
      <Row
        className="user-row align-items-center justify-content-center"
        onClick={() => console.log("this will set the user and start the chat")}
      >
        <Col className="col-4 justify-content-center">
          <div className="chat-user">
            <img src={user.avatar} alt="" />
          </div>
        </Col>
        <Col className="col-8">
          <p className="mb-0 mt-1 text-white">{user.username}</p>
          <p className="mb-1 text-muted">Recent chat</p>
        </Col>
      </Row>
    </>
  );
};

export default User;
