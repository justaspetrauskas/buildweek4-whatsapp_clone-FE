import React, { useEffect, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import Chat from "./Chat";
import "./Homepage.css";

const UsersContainer = ({ token }) => {
  const [chats, setChats] = useState([]);

  //   fetch all the users from DB
  const fetchChats = async (accesstoken) => {
    console.log(process.env.REACT_APP_API_BE);
    try {
      let chats = await fetch(`${process.env.REACT_APP_API_BE}/chats`, {
        method: "GET",
        headers: {
          Authorization: accesstoken,
        },
      });
      if (chats.ok) {
        let data = await chats.json();
        setChats(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChats(token);
  }, [token]);
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
      <div>
        {chats.map((chat, index) => (
          <Chat chat={chat} key={index} />
        ))}
      </div>
    </>
  );
};

export default UsersContainer;
