import { Form, Button, Container } from 'react-bootstrap'
import { useState } from "react"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./login.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setUserData, setBearerToken } from '../../redux/actions/user'



const Login = (props) => {
    const [login, setLogin] = useState("")
    const [loginValidation, setLoginValidation] = useState(false)
    const [isTransitionPage, setTransitionPage] = useState(false)
    const [token, setToken] = useState("")

    const dispatch = useDispatch()
    const selector = useSelector(s => s.user.userData)



    const handleForm = (key, value) => {
        setLogin({
            ...login,
            [key]: value,
        })

        //console.log(selector)
    }

    const getUserToken = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(`${process.env.REACT_APP_API_REGISTER + "/" + "session"}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            }
            )
            if (response.ok) {
                let userToken = await response.json()
                console.log(userToken, "user token")
                window.localStorage.setItem("user_Token", userToken.accessToken)
                setToken(window.localStorage.getItem("user_Token", userToken))
                let bearer = window.localStorage.getItem("user_Token").replace('Bearer','')
                dispatch(setBearerToken(bearer))
                console.log('hey',selector.bearer)
                getUserData()
            } else {
                setLoginValidation(true)
            }
        } catch (error) {
            setLoginValidation(true)
            // console.error(error)
            // return error
        }
    }

    const getUserData = async () => {
        let userToken = "Bearer " + window.localStorage.getItem('user_Token')
        try {
            let response = await fetch(`${process.env.REACT_APP_API_REGISTER + "/" + "me"}`, {
                method: 'GET',
                headers: {
                    "Authorization": userToken,
                },
            })
            console.log(userToken)
            if (response.ok) {

                let userData = await response.json()
                dispatch(setUserData(userData))
                if (userData.email === undefined) {
                    setLoginValidation(true)
                    return
                }
                setTransitionPage(true)
                let userDataKeyList = Object.keys(userData)
                userDataKeyList.forEach(key => window.localStorage.setItem(key, userData[key]))
                 props.history.push('home')
            } else {
                setLoginValidation(true)
            }

        } catch (e) {
            console.log(e)
            return e

        }
    }




    return (

        <div class="backg py-5">
            <Container id="container" className="py-5">
                <Form id="login">
                    <img src="https://camo.githubusercontent.com/40a80c83c5ce6ff286d0693ebe6b736cdcce8c94b22e3cd1b56ef5904733da8e/68747470733a2f2f6173736574732e737469636b706e672e636f6d2f696d616765732f3538306235376663643939393665323462633433633534332e706e67" width="300" height="300" alt="" className="mr-auto" />
                    <h3 id="title">Welcome to Whatsapp</h3>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id="title">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { handleForm('email', e.target.value) }} />
                        <Form.Text className="text-muted">


                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>



                    <Form.Group controlId="formBasicPassword">
                        <Form.Label id="title">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => { handleForm('password', e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" id="title">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    {loginValidation && (
                        <div className="container d-flex justify-content-center">
                            <p className="text-danger">
                                <strong>Sorry incorrect username/password :(</strong>
                            </p>
                        </div>
                    )}

                    <Button variant="success" type="submit" className="my-2 btn btn-large w-100" id="btn" onClick={(e) => getUserToken(e)}>
                        <Link to="/home" className="link" onClick={(e) => getUserToken(e)} >     Log in</Link>
                    </Button>
                    {/* <a
                        id="login-btn"
                        className="btn btn-success"
                        href="/home"
                        onClick={(e) => getUserToken(e)}
                    >
                        Log in
                    </a> */}
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