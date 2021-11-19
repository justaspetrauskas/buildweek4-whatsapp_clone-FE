import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import UsersContainer from './UsersContainer'
import MessageBar from './MessageBar'
import { Row, Col } from 'react-bootstrap'
import {io} from 'socket.io-client'
import {useEffect, useState} from 'react'
import './Homepage.css'
import {GrSend} from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import {setUsers} from '../redux/actions/user'

const ADDRESS = process.env.REACT_APP_SOCKET_URL
export const socket = io(ADDRESS, { transports: ['websocket'] })


const Homepage = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [chatHistory, setChatHistory] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([])

    const bearerToken = useSelector(s => s.user)
    const dispatch = useDispatch()


    const fetchOnlineUsers = async() => {
        console.log(bearerToken)
        try {
            let response = await fetch(`${process.env.REACT_APP_API_REGISTER}`, {
                method: 'GET',
                headers: {
                    "Authorization": bearerToken.bearer,
                },
            })
            if (response.ok) {
              //   let { onlineUsers }: { onlineUsers: User[] } = await response.json()
              let data = await response.json()
              console.log(data)
              setOnlineUsers(data)
              dispatch(setUsers(data))
            } else {
              console.log('Something went wrong fetching the online users :(')
            }
          } catch (error) {
            console.log(error)
          }
    }


    useEffect(() => {
        socket.on('connect', () => {
          
          console.log('Connection established!')
        })
    
        socket.on('loggedin', () => {
          console.log('The client now is logged in!')
          // now I'm able to send/receive messages
          // now I can disable the username input field, and I can enable the message input field
          setLoggedIn(!loggedIn)
          fetchOnlineUsers()
          socket.on('newConnection', () => {
            console.log('new user connected!')
            fetchOnlineUsers()
          })
        })
    
        socket.on('message', (newMessage) => {

          setChatHistory((updatedChatHistory) => [...updatedChatHistory, newMessage])
          // this instead will work, because I'm reading and evaluating the content of chatHistory
          // every time I need to set the new value for it
        })
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
   

    return (
        <>
            <Row>
                <Col className='col-3 px-0' style={{ borderRight: '1px solid white' }}>

                    <NavbarLeft />

                </Col>
                <Col className='col-9 px-0'>
                    <NavbarRight />
                </Col>
            </Row>

            <Row style={{ height: '100vh' }}>
                <Col className='col-3 px-0' style={{ borderRight: '1px solid white', backgroundColor:'black' }}>

                    <UsersContainer />

                </Col>
                <Col className='col-9 px-0 back-image'>
                    <MessageBar />
                </Col>
            </Row>


        </>
    )
}

export default Homepage