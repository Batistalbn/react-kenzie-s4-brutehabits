import { Container } from "./styles";
import { Button as MuiButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import BrutalHabits from "../../assets/BrutalHabits_900.png";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Modal from "../Modal";
import { TextField, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useLocation } from "react-router";

const Header = () => {
  const history = useHistory();
  const { logout, editProfile } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const userData =
    JSON.parse(localStorage.getItem("@BrutalHabits:userData")) || "";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openModifyProfileModal = () => {
    reset();
    handleClose();
    setOpenModal(true);
  };

  const formSchema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatória").email("E-mail inválida"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    editProfile(data);
    reset();
    setOpenModal(false);
  };

  return (
    <Container>
      <div>
        <p>Bem-vindo/a, {userData?.username}</p>
      </div>
      <div>
        <MuiButton
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Perfil
        </MuiButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => openModifyProfileModal()}>
            Editar Perfil
          </MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>

        <MuiButton
          color={
            location.pathname === "/dashboard/habits" ? "secondary" : "primary"
          }
          onClick={() => history.push("/dashboard/habits")}
        >
          Hábitos
        </MuiButton>
        <MuiButton
          color={
            location.pathname === "/dashboard/groups" ? "secondary" : "primary"
          }
          onClick={() => history.push("/dashboard/groups")}
        >
          Grupos
        </MuiButton>

        <img className="logo" src={BrutalHabits} alt="" />
      </div>
      <Modal open={openModal} setOpen={setOpenModal}>
        <Box
          onSubmit={handleSubmit(onSubmitFunction)}
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1.5,
            },
          }}
        >
          <TextField
            label="Username"
            placeholder="Modifique seu username"
            {...register("username")}
            error={errors.username?.message}
            helperText={errors.username?.message}
          />
          <TextField
            label="E-mail"
            placeholder="Modifique seu e-mail"
            {...register("email")}
            error={errors.email?.message}
            helperText={errors.email?.message}
          />

          <Button
            thin="true"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Modificar
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Header;
