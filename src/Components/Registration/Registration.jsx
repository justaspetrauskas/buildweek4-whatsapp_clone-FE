

import { Container, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./registration.css"


const Registration = () => {
    const onSubmit = (values, actions) => {
        console.log(values)
        createUser(values)
    }

    const createUser = async (values) => {
        console.log("inside create user")

        try {
            let response = await fetch(
                "process.env.REACT_APP_API_REGISTER",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            )
            if (response.ok) {
                alert("USER SAVED!")
                let dataRequested = await response.json()
                console.log(dataRequested)
                window.localStorage.setItem("user_Token", dataRequested.access_token)
            } else {
                alert("User not created")
            }
        } catch (e) {
            return e
        }
    }

    return (
        <div class="backg py-5">



            <Container className="col-md-8">
                <img src="https://camo.githubusercontent.com/40a80c83c5ce6ff286d0693ebe6b736cdcce8c94b22e3cd1b56ef5904733da8e/68747470733a2f2f6173736574732e737469636b706e672e636f6d2f696d616765732f3538306235376663643939393665323462633433633534332e706e67" width="300" height="300" alt="" />
                <h3 id="title">Join to Whatsapp</h3>
                <Form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" id="title">

                            Full Name :
                        </label>
                        <Form.Control id="name"
                            className="form-control"
                            name="name"
                            type="text" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="email" id="title">
                            {" "}

                            Email Address :
                        </label>
                        <Form.Control tid="email"
                            className="form-control"
                            name="email"
                            type="email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password" id="title">
                            {" "}

                            Password :
                        </label>
                        <Form.Control name="password" type="password" placeholder="Password" id="password" />

                    </div>


                    <div className="form-group">
                        <label htmlFor="username" id="title">

                            Picture url :
                        </label>

                        <Form.Control name="url" id="url"
                            type="url" />
                    </div>

                    <button
                        id="btn"
                        type="submit"
                        className="btn btn-success my-2 btn-large w-100"
                    >
                        <Link to="/" id="link">      Register</Link>
                    </button>

                </Form>
            </Container>


        </div>
    )
}
export default Registration



