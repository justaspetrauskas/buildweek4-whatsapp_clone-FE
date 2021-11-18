import React, { useEffect, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import User from "./User";
import "./Homepage.css";

const UsersContainer = ({ token }) => {
  return (
    <>
      <InputGroup className="my-3 mx-4" style={{ width: "88%" }}>
        <FormControl
          placeholder="Search or start new chat"
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{
            borderRadius: "10vh",
            height: "4vh",
            backgroundColor: "#323739",
          }}
        />
      </InputGroup>
    </>
  );
};

export default UsersContainer;
