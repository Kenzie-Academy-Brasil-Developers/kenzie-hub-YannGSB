import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    toast.success("Logout realizado com sucesso");
    localStorage.removeItem("@KENZIEHUBTOKEN");
  };

  const userLogin = async (payLoad, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payLoad);
      localStorage.setItem("@KENZIEHUBTOKEN", data.token);
      setUser(data.user);
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (payLoad, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", payLoad);
      navigate("/");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error(error);
      console.log(payLoad);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};

// const [list, setList] = useState([]);

// const addToList = (payLoad) => {
//   const newList = { ...payLoad, id: crypto.randomUUID() };
//   setList([...list, newList]);
// };

// const removeFromList = (itemId) => {
//   const newList = list.filter(({ id }) => id !== itemId);
//   setList(newList);
// };

//   return (
//     <UserContext.Provider value={{ list, addToList, removeFromList }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
