/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { fetchTransactions } from "../../helpers/axiosHelper";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [transactions, setTransaction] = useState([]);

  const [show, setShow] = useState(false);

  const toggleModal = (value) => setShow(value);

  const getTransactions = async () => {
    // call axios helper to call api
    const { status, transactions } = await fetchTransactions();
    // console.log(response);
    // receive data and mount to the transactions by setTransaction()

    status === "success" && setTransaction(transactions);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        transactions,
        getTransactions,
        toggleModal,
        show,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
