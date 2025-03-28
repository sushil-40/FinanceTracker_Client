import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { IoCreateSharp } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { GiBank } from "react-icons/gi";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

export const Header = () => {
  const { user, setUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const handleOnLogOut = () => {
    // 1. On Click logout delete accessJWT token from the local storage.

    localStorage.removeItem("accessJWT");

    // 2. Reset user object form the state
    // we pass empty object to the custom context global hook so that it override the data with empty string
    setUser({});
    setShowMenu(false);
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-body-dark"
      expanded={showMenu}
    >
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        {user?.name && <div>Welcome {user?.name} !</div>}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowMenu(true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                {" "}
                <Nav.Link
                  onClick={() => setShowMenu(false)}
                  as={Link}
                  to="/dashboard"
                >
                  <RiDashboard3Fill />
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  onClick={() => setShowMenu(false)}
                  as={Link}
                  to="/transaction"
                >
                  <GiBank /> Transaction
                </Nav.Link>
                <Nav.Link onClick={handleOnLogOut} as={Link} to="/">
                  <ImExit /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link
                  onClick={() => setShowMenu(false)}
                  as={Link}
                  to="/signup"
                >
                  <IoCreateSharp />
                  Sign Up
                </Nav.Link>
                <Nav.Link onClick={() => setShowMenu(false)} as={Link} to="/">
                  <TbLogin /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
