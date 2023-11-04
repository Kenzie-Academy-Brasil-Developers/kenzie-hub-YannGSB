import Routes from "./routes";
import "./styles/index.scss";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./providers/UserContext";
import { LoadingPage } from "./pages/LoadingPage";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <LoadingPage /> : <Routes />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
