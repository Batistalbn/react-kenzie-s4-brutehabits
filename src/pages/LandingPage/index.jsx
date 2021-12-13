import { Container, RightContainer, LeftContainer } from "./styles";
import BrutalHabits from "../../assets/BrutalHabits_500.png";

function LandingPage(){
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
          Aqui, você vai <strong>BRUTALMENTE</strong> mudar
        </h2>
        <h2>a forma como se organiza</h2>
        <div>
          <button>Entrar</button>
          <button>Registrar</button>
        </div>
      </RightContainer>
    </Container>
  );
};

export default LandingPage;
