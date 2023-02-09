import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { GlobalData } from '../App';

const SignupPage = () => {

    const allData = useContext(GlobalData)

    const setLoginOrNot = allData.setLoginOrNot;
    const setadminOrUser = allData.setadminOrUser;
    const setShowSignupModel = allData.setShowSignupModel;

    let fname = useRef()
    let lname = useRef()
    let signupusername = useRef()
    let email = useRef()
    let signuppassword = useRef()
    let signupcnfpassword = useRef()

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (signuppassword.current.value === signupcnfpassword.current.value) {

            const userSignupdata = {
                "fname": fname.current.value,
                "lname": lname.current.value,
                "username": signupusername.current.value,
                "email": email.current.value,
                "password": signuppassword.current.value,
            }

            setLoginOrNot(true)
            setadminOrUser(false)
            sessionStorage.setItem("UserOrAdminLogin", "USER")
            sessionStorage.setItem("UserDetails", JSON.stringify(userSignupdata))
            setShowSignupModel(false)

            console.log("signup Working")

        }
        else {
            alert("Please enter correct confirm Password!")
        }
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} preventdefault>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                            ref={fname}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                            ref={lname}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                ref={signupusername}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required ref={email} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={signuppassword} />
                        <Form.Control.Feedback type="invalid">
                            Password must have length 6 or more and contain atleast 1 capital 1 small and one special character.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={signupcnfpassword} />
                        <Form.Control.Feedback type="invalid">
                            Password must have length 6 or more and contain atleast 1 capital 1 small and one special character.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default SignupPage;