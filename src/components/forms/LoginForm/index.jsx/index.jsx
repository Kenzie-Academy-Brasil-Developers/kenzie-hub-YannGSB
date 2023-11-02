import { Link } from "react-router-dom";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../loginForm.schema";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../../providers/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const submit = (payLoad) => {
    userLogin(payLoad, setLoading);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className="title two grey0">Login</h1>

        <form onSubmit={handleSubmit(submit)}>
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
          <button className="btn primary" type="submit" disabled={loading}>
            Entrar
          </button>
        </form>
        <div className={styles.registerContainer}>
          <p className="label grey1">Ainda não possui uma conta?</p>
          <Link className={`btn disabled ${styles.navigate}`} to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
};
