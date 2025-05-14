import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { SignUpForm } from "../components/SignUpForm";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { SignInForm } from "../components/SignInForm";
// import { useUser } from "../context/UserContext";

const Login = () => {
  // const { user, setUser } = useUser();
  // console.log(data);
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col md={6}>
          <SignInForm />
        </Col>
        <Col md={6}>
          <div
            className=" d-flex flex-column justify-content-center fs-1"
            style={{
              height: "100%",
            }}
          >
            <div className="signin-bg mt-2">
              <div className="text-danger text-decoration-line-through">
                <BsGraphDownArrow /> Reduce your expenses
              </div>
              <div className="text-success">
                <BsGraphUpArrow />
                Increase your incomes
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
