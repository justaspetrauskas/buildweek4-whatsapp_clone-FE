import { useFormik, Formik, Field, Form } from "formik"
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./registration.css"

const validate = (values) => {
    const errors = {}


    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = "Password must have at least 8 characters"
    }

    if (!values.username) {
        errors.username = "Required"
        // } else if (values.username.length < ) {
        //   errors.username = 'Username must have at least 5 characters';
    }



    return errors
}
const Registration = (props) => {
    const [showAlert, setShowAlert] = useState(false)
    const formik = useFormik({
        initialValues: {


            email: "",
            username: "",
            password: "",
            image: "",
        },
        validate,
        onSubmit: (values) => {
            console.log("inside Submit", values)
            createUser(values, " <<<<<< inside Signupform on submit")

        },
    })

    const createUser = async (values) => {
        console.log(values, " from fetch")
        console.log("inside create user")
        try {
            let response = await fetch(
                `${process.env.REACT_APP_API_REGISTER + "/" + "account"}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),

                }

            )

            if (response.ok) {
                let dataRequested = await response.json()
                console.log(dataRequested)
                window.localStorage.setItem("user_Token", dataRequested.access_token)
                getUserData()
            } else {
                alert("User not created")
            }
        } catch (e) {
            return e
        }
    }

    const getUserData = async () => {

        try {
            let response = await fetch(
                "process.env.REACT_APP_API_REGISTER",
                {
                    method: "GET",

                }
            )
            let userData = await response.json()
            let userDataKeyList = Object.keys(userData)
            userDataKeyList.forEach((key) =>
                window.localStorage.setItem(key, userData[key])
            )
            setShowAlert(true)
            setTimeout(() => {
                props.history.push("transitionPage")
            }, 2000)
        } catch (e) {
            console.log(e)
            return e
        }
    }

    return (
        <div class="backg py-5">



            <Container id="container" className="col-md-8">
                <img src="https://camo.githubusercontent.com/40a80c83c5ce6ff286d0693ebe6b736cdcce8c94b22e3cd1b56ef5904733da8e/68747470733a2f2f6173736574732e737469636b706e672e636f6d2f696d616765732f3538306235376663643939393665323462633433633534332e706e67" width="300" height="300" alt="" />
                <h3 id="title">Join to Whatsapp</h3>

                <Formik
                    initialValues={{

                        email: "",
                        username: "",

                        password: "",

                        image: "",
                    }}
                >
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" id="title">

                                Username:
                            </label>
                            <Field
                                id="email"
                                className="form-control"
                                name="username"
                                type="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="fw-bold text-danger">{formik.errors.username}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" id="title">
                                {" "}

                                Email Address:
                            </label>
                            <Field
                                id="email"
                                className="form-control"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="fw-bold text-danger" >{formik.errors.email}</div>
                            ) : null}

                        </div>
                        <div className="form-group">
                            <label htmlFor="password" id="title">
                                {" "}

                                Password:
                            </label>
                            <Field
                                id="password"
                                className="form-control"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="fw-bold text-danger">{formik.errors.password}</div>
                            ) : null}

                        </div>


                        <div className="form-group">
                            <label htmlFor="username" id="title">

                                Picture url:
                            </label>

                            <Field
                                id="password"
                                className="form-control"
                                name="text"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.image}
                            />
                        </div>
                        {showAlert && <Alert variant="success"> <Alert.Heading>Account Created Successfully</Alert.Heading></Alert>}

                        <button
                            id="btn"
                            type="submit"
                            className="btn btn-success my-2 btn-large w-100"

                        >
                            <Link to="/" id="link"> Register    </Link>

                        </button>

                    </Form>
                </Formik>
            </Container>


        </div >
    )
}
export default Registration



