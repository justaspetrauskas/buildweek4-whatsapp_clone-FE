import { Form, Button, Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./login.css"
import { Link } from "react-router-dom"





const Login = () => {
    return (

        <div class="backg py-5">
            <Container id="container" className="my- py-5">
                <Form id="login">
                    <img src="https://camo.githubusercontent.com/40a80c83c5ce6ff286d0693ebe6b736cdcce8c94b22e3cd1b56ef5904733da8e/68747470733a2f2f6173736574732e737469636b706e672e636f6d2f696d616765732f3538306235376663643939393665323462633433633534332e706e67" width="300" height="300" alt="" />
                    <h3 id="title">Welcome to Whatsapp</h3>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id="title">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">


                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>



                    <Form.Group controlId="formBasicPassword">
                        <Form.Label id="title">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" id="title">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>



                    <Button variant="success" type="submit" className="my-2 btn btn-large w-100" id="btn">
                        <Link to="/main" className="link">      Log in</Link>
                    </Button>
                    <a href="http://google.com" target="_blank" >
                        <Button variant="light" type="submit" className="my-2 btn btn-large w-100 border" id="btn">
                            <FcGoogle className="bg-light" /> Log in with google
                        </Button></a>
                    <Button variant="primary" type="submit" className="my-2 btn btn-large w-100" id="btn" >
                        <FaFacebook className="bg-primary" /> Log in with facebook
                    </Button>

                    <Button variant="primary" className="my-2 btn btn-large w-100" type="submit" id="btn" >
                        <Link to="/register" className="link"> Register</Link>
                    </Button>

                </Form>
            </Container>
        </div>
    )

}

export default Login