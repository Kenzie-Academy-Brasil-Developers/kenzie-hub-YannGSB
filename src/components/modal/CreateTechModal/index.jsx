import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { useContext } from "react";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";
import styles from "./style.module.scss";

export const CreateTechModal = () => {
  const { addTech, setModalVisible } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (payLoad) => {
    console.log(payLoad);
    addTech(payLoad);
    setModalVisible(false);
  };

  return (
    <div className={styles.createTechCard} role="dialog">
      <div className={styles.cardHeader}>
        <h3 className="title three grey0">Cadastrar Tecnologia</h3>
        <button
          className={`btn small ${styles.closeBtn}`}
          type="button"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          X
        </button>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          {...register("title")}
          required
          placeholder="Digite o nome aqui"
        />
        <Select {...register("status")} label="Selecionar status" />

        <button type="submit" className={`btn primary ${styles.submitBtn}`}>
          Cadastrar Tecnologia
        </button>
      </form>
    </div>
  );
};
