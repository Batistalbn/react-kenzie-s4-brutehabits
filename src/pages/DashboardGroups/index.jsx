import AddButton from "../../components/AddButton";
import { ContainerMain } from "./styles";
import Header from "../../components/Header";

const DashboardGroups = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <section>
          <div>
            <h3>Grupos</h3>
            <AddButton />
            Search
          </div>
          Componente Grupos
        </section>
        <div>Listagem Grupos</div>
      </ContainerMain>
    </>
  );
};

export default DashboardGroups;
