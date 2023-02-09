import React, { useContext } from 'react';
import './NavbarComponent.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Loginpage from './LoginPage';
import Signup from './SignupPage';
import logo from '../assests/Icons/bookmyshow-logo2.png';
import { GlobalData } from '../App';

function NavbarComponent() {

    const allData = useContext(GlobalData)

    const adminOrUser = allData.adminOrUser;
    const setadminOrUser = allData.setadminOrUser;
    // const loginOrNot = allData.loginOrNot;
    const setLoginOrNot = allData.setLoginOrNot;
    const showLoginModel = allData.showLoginModel;
    const showSignupModel = allData.showSignupModel;
    const handleLoginClose = allData.handleLoginClose;
    const handleLoginShow = allData.handleLoginShow;
    const handleSignupClose = allData.handleSignupClose;
    const handleSignupShow = allData.handleSignupShow;

    let logout = () => {
        setadminOrUser(false)
        setLoginOrNot(false)
        sessionStorage.clear()
    }

    return (
        <>
            <Navbar key={false} bg="light" expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} alt="logo" height={40} /></Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Form.Select aria-label="Default select example">
                            <option value="Nagpur">Nagpur</option>
                            <option value="Tumsar">Tumsar</option>
                            <option value="Bhandara">Bhandara</option>
                        </Form.Select>
                    </Form>
                    <Nav className='d-flex flex-row'>
                        {
                            adminOrUser ?
                                <Nav.Link className='ms-1 p-3 pt-1 pb-1 bg-danger' as={Button} onClick={() => logout()}>Logout</Nav.Link>
                                :
                                <>
                                    <Nav.Link className='ms-1 p-3 pt-1 pb-1 bg-danger' as={Button} onClick={() => handleSignupShow()}>SignUp</Nav.Link>
                                    <Nav.Link className='ms-1 p-3 pt-1 pb-1 bg-danger' as={Button} onClick={() => handleLoginShow()}>Login</Nav.Link>
                                </>
                        }
                    </Nav>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Hey!
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Noitification</Nav.Link>
                                <Nav.Link href="#action2">Orders</Nav.Link>
                                <Nav.Link href="#action3">Stream Library</Nav.Link>
                                <Nav.Link href="#action5">BookaSmile</Nav.Link>
                                <Nav.Link href="#action6">Rewards</Nav.Link>
                                <Nav.Link href="#action4">Help & Support</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Modal show={showSignupModel} onHide={() => handleSignupClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Signup />
                </Modal.Body>
            </Modal>

            <Modal show={showLoginModel} onHide={() => handleLoginClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Loginpage />
                </Modal.Body>
            </Modal>

        </>
    );
}

export default NavbarComponent;
