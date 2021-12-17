import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import Button from "../Button";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const GroupSignup = (setOpen) => {
  const { token } = useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    console.log(data);
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Sucesso ao criar usuário");
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Username existente");
        setOpen(false);
      });
  };

  return (
    <div>
      <h3>Cadastro de Grupo</h3>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          {...register("name")}
          color="secondary"
          className="name"
          label="Nome do grupo"
          variant="filled"
          error={errors.name?.message}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("description")}
          color="secondary"
          className="description"
          label="Descrição"
          variant="filled"
          error={errors.description?.message}
          helperText={errors.description?.message}
        />
        <TextField
          placeholder="Categoria"
          {...register("category")}
          color="secondary"
          className="category"
          label="Categoria"
          variant="filled"
          error={errors.category?.message}
          helperText={errors.category?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          thin="false"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default GroupSignup;
