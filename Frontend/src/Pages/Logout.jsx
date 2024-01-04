import { useEffect } from "react";
import { deleteToken } from "../Store/tokenSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteToken());
    window.location.reload();
  });

  return <Navigate to="/" />;
};
