import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api.js";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("@KENZIEHUBTOKEN");
  const [techList, setTechList] = useState([]);
  const [editTech, setEditTech] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getTechs = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
      } catch (error) {
        toast.error(error);
      }
    };
    getTechs();
  }, []);

  const addTech = async (payLoad) => {
    try {
      const { data } = await api.post("/users/techs", payLoad, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
      toast.success("Tecnologia adicionada!");
    } catch (error) {
      toast.error(error);
    }
  };

  const removeTech = async (payLoad) => {
    try {
      await api.delete(`/users/techs/${payLoad}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techList.filter((tech) => tech.id !== payLoad);
      toast.success("Tecnologia removida com sucesso!");
      setTechList(newTechList);
    } catch (error) {
      toast.error(error);
    }
  };

  const updateTech = async (payLoad) => {
    try {
      const { data } = await api.put(`/users/techs/${editTech.id}`, payLoad, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.map((tech) => {
        if (tech.id === editTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      toast.success("Tecnologia atualizada com sucesso!");
      setTechList(newTechList);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        addTech,
        modalVisible,
        setModalVisible,
        removeTech,
        setEditTech,
        editTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
