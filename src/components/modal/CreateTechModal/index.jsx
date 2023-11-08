import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { useContext } from "react";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";

export const CreateTechModal = () => {
  const { addTech, setModalVisible } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (payLoad) => {
    console.log(payLoad);
    addTech(payLoad);
    setModalVisible(false);
  };

  return (
    <div role="dialog">
      <div>
        <h3 className="title three grey0">Cadastrar Tecnologia</h3>
        <button
          className="btn disabled small"
          type="button"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          {...register("title")}
          required
          placeholder="Digite o nome aqui"
        />
        <Select {...register("status")} label="Selecionar status" />

        <button type="submit" className="btn primary">
          Cadastrar Tecnologia
        </button>
      </form>
    </div>
  );
};
