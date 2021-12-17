import AddButton from "../../components/AddButton";
import { ContainerMain, SectionHeader } from "./styles";
import Header from "../../components/Header";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/User";
import HabitsList from "../../components/HabitsList";
import Modal from "../../components/Modal";
import { HabitsContext } from "../../providers/Habits";
import HabitNew from "../../components/HabitNew";

const DashboardHabits = () => {
  const { userData } = useContext(UserContext);
  const { HabitCreate, newHabit, setNewHabit } = useContext(HabitsContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header name={userData.username} />
      <ContainerMain>
        <section>
          <SectionHeader>
            <h2>Habitos</h2>
            <AddButton onClick={() => setOpen(true)} />
          </SectionHeader>
          <HabitsList />
        </section>
      </ContainerMain>

      <Modal open={open} setOpen={setOpen}>
        <HabitNew />
      </Modal>
    </>
  );
};

export default DashboardHabits;
