import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../modal/CreateTechModal";
import { EditTechModal } from "../modal/EditTechModal";

export const TechList = () => {
  const { techList, modalVisible, setModalVisible, editTech } =
    useContext(TechContext);

  return (
    <div>
      {modalVisible ? <CreateTechModal /> : null}
      {editTech ? <EditTechModal /> : null}

      <div>
        <h1 className="title three grey0">Tecnologias</h1>
        <button
          onClick={() => setModalVisible(true)}
          className="btn disabled small"
        >
          +
        </button>
      </div>

      <div>
        <ul>
          {techList.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};
