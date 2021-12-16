import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardImage,
  CardInfo,
  Container,
  AddHabit,
} from "./styles";

const HabitsList = () => {
  const { habits } = useContext(HabitsContext);
  return (
    <>
      {habits?.length > 0 ? (
        habits.map((habit) => (
          <CardContainer key={habit.id}>
            <div>
              <h3>{habit.title}</h3>
              <button>Delete</button>
              <button>Edit</button>
            </div>
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
        ))
      ) : (
        <AddHabit>
          <h3>Seus habitos serao exibidos aqui! </h3>
        </AddHabit>
      )}
    </>
  );
};

export default HabitsList;
