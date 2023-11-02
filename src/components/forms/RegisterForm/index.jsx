import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const submit = (payLoad) => {
    userRegister(payLoad, setLoading);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        type="text"
        label="Nome"
        {...register("name")}
        placeholder="Digite aqui seu nome"
        error={errors.name}
      />

      <Input
        id="email"
        type="email"
        label="E-mail"
        {...register("email")}
        placeholder="Digite aqui seu e-mail"
        error={errors.email}
      />

      <Input
        id="password"
        type="password"
        label="Senha"
        {...register("password")}
        placeholder="Digite aqui sua senha"
        error={errors.password}
      />

      <Input
        id="confirmPassword"
        type="password"
        label="Confirmar senha"
        {...register("confirmPassword")}
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword}
      />

      <Input
        id="bio"
        type="text"
        label="Bio"
        {...register("bio")}
        placeholder="Fale sobre você"
        error={errors.bio}
      />

      <Input
        id="contact"
        type="text"
        label="Contato"
        {...register("contact")}
        placeholder="Opção de contato"
        error={errors.contact}
      />

      <div>
        <label className="label grey0" htmlFor="course_module">
          Selecionar módulo
        </label>
        <select
          defaultValue="placeholder"
          required
          className="input select"
          name="course_module"
          {...register("course_module")}
          error={errors.course_module}
        >
          <option value="placeholder" disabled>
            Selecione seu módulo
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>

      <button className="btn negative" type="submit" disabled={loading}>
        Cadastrar
      </button>
    </form>
  );
};
