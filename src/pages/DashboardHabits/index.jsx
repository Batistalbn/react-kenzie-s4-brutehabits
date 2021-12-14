import AddButton from "../../components/AddButton";
import { ContainerMain } from "./styles";
import Header from "../../components/Header";

const DashboardHabits = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <section>
          <div>
            <h3>Habitos</h3>
            <AddButton />
            Search
          </div>
          Componente Hábitos
        </section>
        <div>Listagem Hábitos</div>
      </ContainerMain>
    </>
  );
};

export default DashboardHabits;
