import {InputGroup, FormControl, Row, Col} from 'react-bootstrap'
import {HiUserCircle} from 'react-icons/hi'
import './Homepage.css'

const UsersContainer = () => {

    let userArray = ['Hasham', 'Justas', 'Sai Krishna', 'Tarun Tej', 'Pradeep', 'Rakesh Reddy', 'Hemanth', 'Salman' ]

return(
    <>
    <InputGroup className="my-3 mx-4" style={{width:'88%'}}>
    <FormControl
      placeholder="Search or start new chat"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderRadius:'10vh', height: '4vh', backgroundColor:'#323739'}}
    />
  </InputGroup>
{userArray.map(user => 
    <Row className='user-row'>
        <Col className='col-2' style={{paddingLeft:'2rem'}}>
            <HiUserCircle className='chat-user'/>
        </Col>
        <Col className='col-10' style={{paddingLeft:'4rem'}}>
        <p className='mb-0 mt-3 text-white'>{user}</p>
        <p className='mb-0 text-muted'>Recent chat</p>
        </Col>
    </Row>
)}
    </>
)
}

export default UsersContainer