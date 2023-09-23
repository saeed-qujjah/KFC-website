import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// -------------------  for authentication and More organization ----------------
const RedirectPage = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/KFC/Home");
  }, []);

  return <div></div>;
};

export default RedirectPage;
