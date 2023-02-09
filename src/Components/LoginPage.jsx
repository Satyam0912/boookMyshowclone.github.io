import React, { useRef, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { GlobalData } from '../App';

const LoginPage = () => {

    const allData = useContext(GlobalData)

    // const loginOrNot = allData.loginOrNot
    // const adminOrUser = allData.adminOrUser
    const setLoginOrNot = allData.setLoginOrNot
    const setadminOrUser = allData.setadminOrUser
    const setShowLoginModel = allData.setShowLoginModel;



    const adminUsername = "ADMIN";
    const adminPassword = "Admin@123";
    const loginusername = useRef()
    const loginpassword = useRef()

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (loginusername.current.value === adminUsername && loginpassword.current.value === adminPassword) {
            setLoginOrNot(true)
            setadminOrUser(true)
            sessionStorage.setItem("UserOrAdminLogin", "ADMIN")
            setShowLoginModel(false)
            console.log("login Working")
        }
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} preventdefault>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                ref={loginusername}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={loginpassword} />
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

export default LoginPage;