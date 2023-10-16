import { Route, Routes } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "../pages";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
