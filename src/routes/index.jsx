import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "../pages";
import { useState } from "react";
import { toast } from "react-toastify";

export default () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    toast.success("Logout realizado com sucesso");
    localStorage.removeItem("@KENZIEHUBTOKEN");
  };

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} userLogout={userLogout} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
