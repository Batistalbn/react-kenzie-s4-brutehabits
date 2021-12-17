import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Box } from "@mui/material";
import { FormContainer, FlexContainer, FormHeader } from "./styles";
import BrutalHabits from "../../assets/BrutalHabits_900.png";
import React from "react";
import Button from "../Button";
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";

const HabitEdit = () => {
  const { HabitUpdate, habitID, setHabitId, open, setOpen } =
    useContext(HabitsContext);
  const userData =
    JSON.parse(localStorage.getItem("@BrutalHabits:userData")) || "";

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatorio"),
    category: yup.string().required("Selecione uma categoria"),
    difficulty: yup.string().required("Selecione a dificuldade"),
    frequency: yup.string().required("Selecione a frequencia"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      difficulty: "",
      frequency: "",
      achieved: false,
      how_much_achieved: 0,
      user: userData.id,
    },
  });

  const onSubmitFunction = (data) => {
    HabitUpdate(data);
    setOpen(false);
  };

  return (
    <>
      <FlexContainer>
        <FormHeader>
          <img src={BrutalHabits} alt="BrutalHabits logo" />
        </FormHeader>
        <FormContainer>
          <Box
            onSubmit={handleSubmit(onSubmitFunction)}
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
              },
            }}
            noValidate
            autoComplete="on"
          >
            <h1>Edite seu Habito</h1>
            <TextField
              color="secondary"
              className="title"
              label="Titulo"
              variant="filled"
              {...register("title")}
              error={errors.title?.message}
              helperText={errors.title?.message}
            />
            <TextField
              color="secondary"
              label="Categoria"
              variant="filled"
              {...register("category")}
              error={errors.email?.message}
              helperText={errors.email?.message}
            />
            <TextField
              color="secondary"
              label="Dificuldade"
              variant="filled"
              {...register("difficulty")}
              error={errors.difficulty?.message}
              helperText={errors.difficulty?.message}
            />
            <TextField
              color="secondary"
              label="Frequencia"
              variant="filled"
              {...register("frequency")}
              error={errors.frequency?.message}
              helperText={errors.frequency?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              thin="true"
            >
              Registrar
            </Button>
          </Box>
        </FormContainer>
      </FlexContainer>
    </>
  );
};

export default HabitEdit;
