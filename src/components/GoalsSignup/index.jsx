import { TextField, Box } from "@mui/material";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { GroupsContext } from "../../providers/Groups";

const GoalsSignup = (setOpen) => {
  const { token } = useContext(UserContext);
  const { displayGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    title: yup.string("Error").required("Campo obrigatório"),
    difficulty: yup.string("Error").required("Campo obrigatório"),
    achieved: yup.string("Error").required("Campo obrigatório"),
    how_much_achieved: yup.string("Error").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    data.achieved === "Sim" ? (data.achieved = true) : (data.achieved = false);
    const newData = [{ ...data, groups: displayGroup.id }];

    api
      .post("/goals/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Sucesso ao criar meta");
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Username existente");
      });
  };

  return (
    <div>
      <h3>Cadastro de Metas</h3>
      <Box
        onSubmit={handleSubmit(onHandleSubmit)}
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
          },
        }}
        noValidate
        autoComplete="on"
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <TextField
          color="secondary"
          className="title"
          label="Título"
          variant="filled"
          {...register("title")}
          error={errors.title?.message}
          helperText={errors.title?.message}
        />
        <select
          placeholder="Dificuldade"
          {...register("difficulty")}
          error={errors.difficulty?.message}
          style={{ textAlign: "left" }}
        >
          {["", "Fácil", "Médio", "Difícil"].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>

        <select
          placeholder="Objetivo alcançado?"
          {...register("achieved")}
          error={errors.achieved?.message}
          style={{ textAlign: "left" }}
        >
          {["", "Sim", "Não"].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>

        <TextField
          color="secondary"
          className="title"
          label="Porcentagem alcançada"
          variant="filled"
          {...register("how_much_achieved")}
          error={errors.how_much_achieved?.message}
          helperText={errors.how_much_achieved?.message}
        />
        <button type="submit">Cadastrar</button>
      </Box>
    </div>
  );
};

export default GoalsSignup;
