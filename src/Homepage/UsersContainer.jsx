import {InputGroup, FormControl, Row, Col} from 'react-bootstrap'
import {HiUserCircle} from 'react-icons/hi'
import './Homepage.css'
import { useSelector} from 'react-redux'

const UsersContainer = () => {

    const onlineUsers = useSelector(state => state.user.onlineUsers)

    //let userArray = ['Hasham', 'Justas', 'Sai Krishna', 'Tarun Tej', 'Pradeep', 'Rakesh Reddy', 'Hemanth', 'Salman' ]

return(
    <>
    {console.log('hey',onlineUsers)}
    <InputGroup className="my-3 mx-4" style={{width:'88%'}}>
    <FormControl
      placeholder="Search or start new chat"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderRadius:'10vh', height: '4vh', backgroundColor:'#323739'}}
    />
  </InputGroup>
{onlineUsers.map(user => 
    <Row className='user-row'>
        <Col className='col-2' style={{paddingLeft:'2rem'}}>
            <HiUserCircle className='chat-user'/>
        </Col>
        <Col className='col-10' style={{paddingLeft:'4rem'}}>
        <p className='mb-0 mt-1 text-white'>{user.username}</p>
        <p className='mb-1 text-muted'>Recent chat</p>
        </Col>
    </Row>
)}
    </>
)
}

export default UsersContainer