import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";
import { LoadingPage } from "../pages/LoadingPage";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/loading" element={<LoadingPage />} />
    </Routes>
  );
};