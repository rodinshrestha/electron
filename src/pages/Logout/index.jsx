import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserName } from "../../redux/Login";

const Logout = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setUserName(""));
    navigate("/login");
  }, []);
  return <div></div>;
};

export default Logout;
