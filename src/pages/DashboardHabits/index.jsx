import AddButton from "../../components/AddButton";
import { ContainerMain } from "./styles";
import Header from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const DashboardHabits = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);
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
        <div>Listagem Hábitos</div>
      </ContainerMain>
    </>
  );
};

export default DashboardHabits;
