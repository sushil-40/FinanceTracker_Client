import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import { Button, Form } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
export const TransactionTable = () => {
  const { transactions } = useUser();
  console.log(transactions);

  // Calculating total
  const balance = transactions.reduce((acc, tran) => {
    return tran.type === "income" ? acc + tran.amount : acc - tran.amount;
  }, 0);

  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{transactions.length} transaction(s) found.</div>
        <div>
          <Form.Control type="text" />
        </div>
        <div>
          <Button>
            <FaPlusSquare /> Add New Transaction
          </Button>
        </div>
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Out</th>
            <th>In</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>{t.createdAt.slice(0, 10)}</td>
                <td>{t.title}</td>
                {t.type === "expenses" && (
                  <>
                    <td className="out">-${t.amount}</td>
                    <td></td>
                  </>
                )}
                {t.type === "income" && (
                  <>
                    <td></td>
                    <td className="in">${t.amount}</td>
                  </>
                )}
              </tr>
            ))}

          {/* <tr>
          <td>2</td>
          <td>23-03-2025</td>

          <td>Shopping</td>
          <td>-$300</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>23-03-2025</td>

          <td>Found on The Street</td>
          <td></td>
          <td>$500</td>
        </tr> */}

          <tr className="fw-bold text-center">
            <td colSpan={3}>Total Balance</td>

            <td colSpan={2} className={`fs-5 ${balance > 0 ? "in" : "out"}`}>
              {balance}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
