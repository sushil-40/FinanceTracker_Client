import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DashboardChart } from "../components/DashboardChart";

const Dashboard = () => {
  return (
    <Container className="p-2">
      <Row className="bg-dark p-3 rounded">
        <Col md={12}>
          <h3 className="ms-4">Dashboard</h3>
          <DashboardChart />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
