import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardImage,
  CardInfo,
  Container,
} from "./styles";

const HabitsList = () => {
  const { habits } = useContext(HabitsContext);
  return (
    <Container>
      {habits.map((habit) => (
        <CardContainer key={habit.id}>
          <CardHeader>
            <h3>{habit.title}</h3>
            <button>Hamburguer Menu</button>
          </CardHeader>
          <CardBody>
            <CardImage>
              <figcaption>{habit.category}</figcaption>
              <img src="" alt="Categoria"></img>
            </CardImage>
            <CardInfo>
              <p>Dificuldade : {habit.difficulty}</p>
              <p>Frequencia : {habit.frequency}</p>
            </CardInfo>
          </CardBody>
        </CardContainer>
      ))}
    </Container>
  );
};

export default HabitsList;
