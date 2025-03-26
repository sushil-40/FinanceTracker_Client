import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Auth = ({ children }) => {
  //to navigate to the proper place
  const location = useLocation();

  const { user } = useUser();
  //   const isLoggedIn = false;
  return user?._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
