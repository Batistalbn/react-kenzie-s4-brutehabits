import AddButton from "../../components/AddButton";
import { ContainerMain } from "./styles";
import Header from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import HabitsList from "../../components/HabitsList";

const DashboardHabits = () => {
  const { userData } = useContext(UserContext);
  return (
    <>
      <Header name={userData.username} />
      <ContainerMain>
        <section>
          <div>
            <h3>Habitos</h3>
            <AddButton />
            Search
          </div>
          Componente Hábitos
        </section>
        <div>
          <HabitsList />
        </div>
      </ContainerMain>
    </>
  );
};

export default DashboardHabits;
