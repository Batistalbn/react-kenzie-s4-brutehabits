import { Container, RightContainer, LeftContainer } from "./styles";
import BrutalHabits from "../../assets/BrutalHabits_900.png";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const LandingPage = () => {
  const history = useHistory();

  return (
    <Container>
      <LeftContainer>
        <img src={BrutalHabits} alt="Brutal Habits" />
      </LeftContainer>
      <RightContainer>
        <h2>
          Bem-vindo ao <span>Brutal Habits</span>
        </h2>
        <h2>
          Aqui você vai mudar <strong>BRUTALMENTE</strong>
        </h2>
        <h2>a forma como se organiza</h2>
        <div>
          <Button onClick={() => history.push("/login")}>Entrar</Button>
          <Button onClick={() => history.push("/register")}>Registrar</Button>
        </div>
      </RightContainer>
    </Container>
  );
};

export default LandingPage;
