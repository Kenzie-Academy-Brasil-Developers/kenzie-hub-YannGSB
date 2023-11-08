import { useContext } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { removeTech, setEditTech } = useContext(TechContext);

  return (
    <li>
      <div>
        <h3 className="title three grey0">{tech.title}</h3>
      </div>

      <div>
        <p className="paragraph grey0">{tech.status}</p>
        <button
          onClick={() => setEditTech(tech)}
          title="Editar"
          aria-label="edit"
        >
          <MdEdit />
        </button>

        <button
          onClick={() => removeTech(tech.id)}
          title="Deletar"
          aria-label="delete"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
