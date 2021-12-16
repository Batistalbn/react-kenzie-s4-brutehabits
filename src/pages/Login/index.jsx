import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";
import { TextField, Box } from "@mui/material";
import { FormContainer, FlexContainer, FormHeader } from "./styles";
import Button from "../../components/Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import BrutalHabits from "../../assets/BrutalHabits_500.png";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const { getUserData } = useContext(UserContext);

  const onSubmitFunction = (data) => {
    console.log(data);

    api
      .post("/sessions/", data)
      .then((response) => {
        toast.success("Sucesso ao logar");

        const token = JSON.stringify(response.data.access);
        localStorage.setItem("@BrutalHabits:token", token);

        getUserData(token);

        return history.push("/dashboard/groups/");
      })
      .catch((err) => {
        toast.error("Combinação username/senha errada");
        console.log(err.message);
      });
  };

  return (
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
          <h1>Login</h1>

          <TextField
            color="secondary"
            label="Username"
            variant="filled"
            {...register("username")}
            error={errors.username?.message}
            helperText={errors.username?.message}
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
          <div>
            <span>
              Não tem conta? Cadastre-se <Link to="/register">aqui</Link>
            </span>
          </div>
          <Button type="submit" variant="contained" color="secondary">
            <HiOutlineArrowRight size="30px" />
          </Button>
        </Box>
      </FormContainer>
    </FlexContainer>
  );
};

export default Login;
