import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../../components/AddButton";
import Button from "../../components/Button";
import PageButton from "../../components/PageButton";

import { ContainerMain, HeaderGroups, DisplayGroups, Pages } from "./styles";
import Header from "../../components/Header";
import GroupsList from "../../components/GroupsList";
import Group from "../../components/Group";

const DashboardGroups = () => {
  const {
    Subscriptions,
    setFilter,
    handleClick,
    previousPage,
    nextPage,
    page,
  } = useContext(GroupsContext);
  return (
    <>
      <Header />
      <ContainerMain>
        <section>
          <HeaderGroups>
            <div>
              <h3>Grupos</h3>
              <AddButton />
              <Button onClick={Subscriptions} variant="contained" thin>
                Meus grupos
              </Button>
            </div>
            <div>
              <input
                placeholder="Pesquisar"
                onChange={(e) => setFilter(e.target.value)}
              />
              <button onClick={handleClick}>Pesquisar</button>
            </div>
          </HeaderGroups>
          <GroupsList />
          <Pages>
            <PageButton left onClick={previousPage} />
            <p>{page}</p>
            <PageButton right onClick={nextPage} />
          </Pages>
        </section>
        <DisplayGroups>
          <Group />
        </DisplayGroups>
      </ContainerMain>
    </>
  );
};

export default DashboardGroups;
