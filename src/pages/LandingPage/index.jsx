import { Container, RightContainer, LeftContainer } from "./styles";
import BrutalHabits from "../../assets/BrutalHabits_500.png";

const LandingPage = () => {
  return (
    <Container>
      <LeftContainer>
        <img src={BrutalHabits} alt="Brutal Habits" />
      </LeftContainer>
      <RightContainer>
        <h2>
          Welcome to <span>Brutal Habits</span>
        </h2>
        <h2>
          Here you will <strong>BRUTALLY</strong> change
        </h2>
        <h2>the way you organize yourself</h2>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </RightContainer>
    </Container>
  );
};

export default LandingPage;
