import { Container } from "./styles";
import { Button } from "@mui/material";
import BrutalHabits from "../../assets/BrutalHabits_500.png";
const Header = ({ img = BrutalHabits, name = "Sir Gregor Clegane" }) => (
  <Container>
    <div>
      <img className="profile" src={img} alt="" />
      <p>Bem-vindo {name} !</p>
    </div>
    <div>
      <Button>Hábitos</Button>
      <Button>Grupos</Button>
      <img className="logo" src={BrutalHabits} alt="" />
    </div>
  </Container>
);
export default Header;
