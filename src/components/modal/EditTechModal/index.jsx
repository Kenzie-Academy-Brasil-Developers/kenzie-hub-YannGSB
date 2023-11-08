import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {
  const { setEditTech, editTech, updateTech } = useContext(TechContext);

  const { handleSubmit, register } = useForm({
    values: {
      status: editTech.status,
    },
  });

  const submit = (payLoad) => {
    updateTech(payLoad);
    setEditTech(null);
  };

  return (
    <div role="dialog">
      <div>
        <h3 className="title three grey0">Tecnologia Detalhes</h3>
        <button
          className="btn disabled small"
          onClick={() => setEditTech(null)}
        >
          X
        </button>
      </div>

      <div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            {...register("title")}
            label="Nome"
            placeholder={editTech.title}
            id="title"
            disabled
          />
          <Select label="Selecionar status" {...register("status")} />
          <button type="submit">Salvar alterações</button>
        </form>
      </div>
    </div>
  );
};
