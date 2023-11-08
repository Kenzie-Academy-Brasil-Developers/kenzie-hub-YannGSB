import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";

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
    <div className={styles.editTechModal} role="dialog">
      <div className={styles.titleCard}>
        <h3 className={`title three grey0 ${styles.cardTitle}`}>
          Tecnologia Detalhes
        </h3>
        <button
          className={`btn small ${styles.closeBtn}`}
          onClick={() => setEditTech(null)}
        >
          X
        </button>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <Input
            {...register("title")}
            label="Nome"
            placeholder={editTech.title}
            id="title"
            disabled
          />
          <Select label="Selecionar status" {...register("status")} />
          <button type="submit" className={`btn primary ${styles.submitBtn}`}>
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
