import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import Button from "../Button";
import { TextField } from "@mui/material";

const GroupSignup = (setOpen) => {
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
    api
      .post("/groups/", data)
      .then((response) => {
        console.log(response);
        toast.success("Sucesso ao criar usuário");
      })
      .catch((err) => {
        toast.error("Username existente");
        console.log(err);
        setOpen(false);
      });
  };

  return (
    <div>
      <h3>Cadastro de Grupo</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
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
        <Button type="submit" variant="contained" color="secondary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default GroupSignup;
