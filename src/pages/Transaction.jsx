import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TransactionTable } from "../components/TransactionTable";
import { TransactionFom } from "../components/TransactionFom";
import { useEffect } from "react";
// import { getTransactions } from "../../../ft_api/models/transaction/transactionModel";
import { useUser } from "../context/UserContext";
import { CustomModal } from "../components/CustomModal";

const Transaction = () => {
  const { getTransactions } = useUser();
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col>
          <CustomModal>
            <TransactionFom />
          </CustomModal>
          <hr />
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
