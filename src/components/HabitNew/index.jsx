import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Box } from "@mui/material";
import { FormContainer, FlexContainer, FormHeader, Select } from "./styles";
import BrutalHabits from "../../assets/BrutalHabits_900.png";
import React, { useState } from "react";
import Button from "../Button";
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";

const HabitNew = () => {
  const { HabitCreate, open, setOpen } = useContext(HabitsContext);
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

  const onSubmitFunction = async (data) => {
    await HabitCreate(data);
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
            <h1>Novo Habito</h1>
            <TextField
              color="secondary"
              className="title"
              label="Titulo"
              variant="filled"
              {...register("title")}
              error={errors.title?.message}
              helperText={errors.title?.message}
            />

            <Select
              placeholder="Categorias"
              {...register("category")}
              error={errors.category?.message}
              style={{ textAlign: "left" }}
            >
              <option value="" disabled defaultValue hidden>
                Escolha uma categoria
              </option>
              {["Auto Cuidado", "Lazer", "Trabalho", "Hobbies"].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </Select>
            <Select
              placeholder="Dificuldade"
              {...register("difficulty")}
              error={errors.difficulty?.message}
              style={{ textAlign: "left" }}
            >
              <option value="" disabled defaultValue hidden>
                Qual o nivel de Dificuldade ?
              </option>
              {["Fácil", "Médio", "Difícil"].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </Select>
            <Select
              placeholder="Frequencia"
              {...register("frequency")}
              error={errors.frequency?.message}
              style={{ textAlign: "left" }}
            >
              <option value="" disabled defaultValue hidden>
                Qual a frequencia ?
              </option>
              {[
                "Diariamente",
                "Menos de 3x semana",
                "3 ou mais vezes na semana",
                "1x por Semana",
              ].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </Select>

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

export default HabitNew;
