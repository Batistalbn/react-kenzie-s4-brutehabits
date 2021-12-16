import { Container } from "./styles";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import BrutalHabits from "../../assets/BrutalHabits_500.png";

const Header = ({ img = BrutalHabits, name = "Sir Gregor Clegane" }) => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <img className="profile" src={img} alt="" />
        <p>Bem-vindo {name} !</p>
      </div>
      <div>
        <Button onClick={() => history.push("/dashboard/habits")}>
          Hábitos
        </Button>
        <Button onClick={() => history.push("/dashboard/groups")}>
          Grupos
        </Button>
        <img className="logo" src={BrutalHabits} alt="" />
      </div>
    </Container>
  );
};

export default Header;
