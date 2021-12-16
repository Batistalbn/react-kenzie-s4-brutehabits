import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import Button from "../Button";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { GroupsContext } from "../../providers/Groups";

const ActivitiesSignup = (setOpen) => {
  const { token } = useContext(UserContext);
  const { displayGroup } = useContext(GroupsContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    const newData = [{ ...data, groups: displayGroup.id }];

    api
      .post("/activities/", newData, {
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
          {...register("title")}
          color="secondary"
          className="title"
          label="Nome da atividade"
          variant="filled"
          error={errors.title?.message}
          helperText={errors.title?.message}
        />
        <TextField
          {...register("realization_time")}
          color="secondary"
          className="realization_time"
          label="Período de realização"
          variant="filled"
          error={errors.realization_time?.message}
          helperText={errors.realization_time?.message}
        />

        <Button type="submit" variant="contained" color="secondary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default ActivitiesSignup;
