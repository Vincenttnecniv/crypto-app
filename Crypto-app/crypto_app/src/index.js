import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./components/Register&signIn/SignIn/SignIn"
import App from "./App";
import Register from "./components/Register&signIn/Register/Register";
import HandleAPI from "./components/APIData/handleAPI_Data";
import Users from "./components/changeUser/Users"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/*Routes*/}
  <Routes>
      <Route path="/" element={<App />} />
       <Route path="register" element={<Register />} /> 
      <Route path="sign_in" element={<SignIn />} />
      <Route path="crypto_currency" element={<HandleAPI />} /> 
      <Route path="users" element={<Users />} /> 
  </Routes>
</BrowserRouter>
);
