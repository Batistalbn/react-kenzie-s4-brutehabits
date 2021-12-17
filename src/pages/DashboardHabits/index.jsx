import AddButton from "../../components/AddButton";
import { ContainerMain, SectionHeader, Habitdiv } from "./styles";
import Header from "../../components/Header";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/User";
import HabitsList from "../../components/HabitsList";
import Modal from "../../components/Modal";
import { HabitsContext } from "../../providers/Habits";
import HabitNew from "../../components/HabitNew";

const DashboardHabits = () => {
  const { userData } = useContext(UserContext);
  const { HabitCreate, newHabit, setNewHabit, open, setOpen } =
    useContext(HabitsContext);

  return (
    <>
      <Header name={userData.username} />
      <ContainerMain>
        <section>
          <SectionHeader>
            <h2>Hábitos</h2>
            <AddButton onClick={() => setOpen(true)} />
          </SectionHeader>
          <Habitdiv>
            <HabitsList />
          </Habitdiv>
        </section>
      </ContainerMain>

      <Modal open={open} setOpen={setOpen}>
        <HabitNew />
      </Modal>
    </>
  );
};

export default DashboardHabits;
