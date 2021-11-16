import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import UsersContainer from './UsersContainer'
import MessageBar from './MessageBar'
import { Row, Col } from 'react-bootstrap'
import './Homepage.css'

const Homepage = () => {

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
                <Col className='col-3 px-0' style={{ borderRight: '1px solid white' }}>

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