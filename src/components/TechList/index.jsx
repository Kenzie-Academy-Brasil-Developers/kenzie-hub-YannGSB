import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../modal/CreateTechModal";
import { EditTechModal } from "../modal/EditTechModal";
import styles from "./style.module.scss";

export const TechList = () => {
  const { techList, modalVisible, setModalVisible, editTech } =
    useContext(TechContext);

  return (
    <div>
      {modalVisible ? <CreateTechModal /> : null}
      {editTech ? <EditTechModal /> : null}

      <div className={styles.techTitle}>
        <h1 className="title three grey0">Tecnologias</h1>
        <button
          onClick={() => setModalVisible(true)}
          className={`btn disabled ${styles.btnClose}`}
        >
          +
        </button>
      </div>

      <div>
        <ul className={styles.listContainer}>
          {techList.length > 0 ? (
            techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
          ) : (
            <h2 className="title two grey0">
              Que pena, parece que não há nada por aqui 😔
            </h2>
          )}
        </ul>
      </div>
    </div>
  );
};
