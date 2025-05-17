import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./index.css";

const Header = () =>{
    return <>
        <Navbar variant="dark" bg="primary">
            <Container>
                <Navbar.Brand >
                    <strong>
                        EMPLOYEE MANAGEMENT SYSTEM
                    </strong>
                </Navbar.Brand>

                <Nav className="m-lg-auto">
                    <Nav.Link as={Link} className="nav-link">Employee</Nav.Link>
                    <Nav.Link as={Link} className="nav-link">Create Employee</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>

}

export default Header;