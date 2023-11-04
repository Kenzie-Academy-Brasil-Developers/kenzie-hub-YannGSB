import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KENZIEHUBTOKEN");
    const userId = localStorage.getItem("@KENZIEHUBUSERID");

    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    toast.success("Logout realizado com sucesso");
    localStorage.removeItem("@KENZIEHUBTOKEN");
    localStorage.removeItem("@KENZIEHUBUSERID");
  };

  const userLogin = async (payLoad, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payLoad);
      localStorage.setItem("@KENZIEHUBTOKEN", data.token);
      localStorage.setItem("@KENZIEHUBUSERID", data.user.id);
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
    <UserContext.Provider
      value={{ user, userLogin, userLogout, userRegister, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
