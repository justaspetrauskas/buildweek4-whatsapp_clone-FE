import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import UsersContainer from "./UsersContainer";
import MessageBar from "./MessageBar";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { setInitSocket, setActiveChat } from "../redux/actions/chat";
import "./Homepage.css";

// let token = "Bearer " + window.localStorage.getItem("user_Token");
// const ADDRESS = process.env.REACT_APP_API_BE;
// console.log(token);
// // const token = socket.handshake.headers["Authorization"];
// const socket = io(ADDRESS, {
//   transports: ["websocket"],
//   query: {
//     authorization: token.split(" ")[1],
//   },
// });

const Homepage = () => {
  const initSocket = useDispatch();
  const activeChatAction = useDispatch();

  initSocket(setInitSocket());
  const socket = useSelector((s) => s.socketInfo.socket);
  //   const activeChat = useSelector((s) => s.chat.activeChat);
  const [isConnected, setConnected] = useState(false);
  const [selectedChat, setSelectedChat] = useState({});
  //   const [allChats, setChats] = useState();

  //   console.log(socket);

  let token = "Bearer " + window.localStorage.getItem("user_Token");

  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connection established!");
      setConnected(true);
      //   receive chats
      const chatsData = fetchChats(token);
      //   setChats(chatsData);
      //   console.log(chatsData);
    });
  }, []);

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
        // setChats(data);
        console.log(data);
        return chats;
        //   setActiveChat
        // setChats(data);
        // activeChatAction(setActiveChat(data[0]));
        // console.log(activeChat);
      }
    } catch (err) {
      console.log(err);
    }
  };
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
