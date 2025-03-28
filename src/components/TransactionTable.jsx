import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import { Button, Form } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
export const TransactionTable = () => {
  const [displayTrans, setDisplayTrans] = useState([]);
  const { transactions, toggleModal } = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

  useEffect(() => {
    setDisplayTrans(transactions);
  }, [transactions]);
  // console.log(transactions);

  // Calculating total
  const balance = displayTrans.reduce((acc, tran) => {
    return tran.type === "income" ? acc + tran.amount : acc - tran.amount;
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    const filteredArg = transactions.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });

    setDisplayTrans(filteredArg);
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);

    if (value === "all") {
      checked
        ? setIdsToDelete(displayTrans.map((item) => item._id))
        : setIdsToDelete([]);

      return;
    }

    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete.filter((id) => id !== value));
    }
    return;
  };
  console.log(idsToDelete);
  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTrans.length} transaction(s) found.</div>
        <div>
          <Form.Control type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button onClick={() => toggleModal(true)}>
            <FaPlusSquare /> Add New Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All"
          value="all"
          onChange={handleOnSelect}
          checked={displayTrans.length === idsToDelete.length}
        />
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
          {displayTrans.length > 0 &&
            displayTrans.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>
                  {" "}
                  <Form.Check
                    label={t.createdAt.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>
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
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger">
            Delete {idsToDelete.length} transaction(s)
          </Button>
        </div>
      )}
    </>
  );
};
