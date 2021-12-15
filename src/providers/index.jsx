import UserProvider from "./User";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <ActivitiesProvider>
      <GoalsProvider>
        <UserProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </UserProvider>
      </GoalsProvider>
    </ActivitiesProvider>
  );
};

export default Providers;
