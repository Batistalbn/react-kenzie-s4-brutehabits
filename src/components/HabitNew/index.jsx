import { Container } from "./styles";
import { Modal as Standart } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Box } from "@mui/material";
import { FormContainer, FlexContainer, FormHeader } from "./styles";

import React from "react";

const HabitNew = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatória").email("E-mail inválida"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas não estão iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      {/* <FlexContainer>
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
            <h1>Cadastro</h1>
            <TextField
              color="secondary"
              className="name"
              label="Username"
              variant="filled"
              {...register("username")}
              error={errors.username?.message}
              helperText={errors.username?.message}
            />
            <TextField
              color="secondary"
              label="E-mail"
              variant="filled"
              {...register("email")}
              error={errors.email?.message}
              helperText={errors.email?.message}
            />
            <TextField
              color="secondary"
              label="Senha"
              type="password"
              variant="filled"
              {...register("password")}
              error={errors.password?.message}
              helperText={errors.password?.message}
            />
            <TextField
              color="secondary"
              label="Confirmar senha"
              type="password"
              variant="filled"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
              helperText={errors.confirmPassword?.message}
            />
            <div>
              <span>
                Já tem uma conta? Entre <Link to="/login">aqui</Link>
              </span>
            </div>

            <Button type="submit" variant="contained" color="secondary">
              <HiOutlineArrowRight size="30px" />
            </Button>
          </Box>
        </FormContainer>
      </FlexContainer> */}
    </>
  );
};

export default HabitNew;
