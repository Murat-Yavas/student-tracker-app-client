import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavigation.scss";

const MainNavigation = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary header"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="nav-container">
        <NavLink className="navbar-link" to="/">
          <Navbar.Brand className="link-text">StudApp</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="navbar-link" to="/students">
              <Navbar.Text className="link-text">Students</Navbar.Text>
            </NavLink>
            <NavLink className="navbar-link" to="/add-student">
              <Navbar.Text className="link-text">Add a new student</Navbar.Text>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
