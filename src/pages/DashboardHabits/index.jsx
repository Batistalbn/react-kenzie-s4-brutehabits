import AddButton from "../../components/AddButton";
import { ContainerMain, SectionHeader } from "./styles";
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
          <SectionHeader>
            <h2>Habitos</h2>
            <AddButton />
          </SectionHeader>
          <HabitsList />
        </section>
      </ContainerMain>
    </>
  );
};

export default DashboardHabits;
