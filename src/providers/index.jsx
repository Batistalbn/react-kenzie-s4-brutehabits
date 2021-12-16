import UserProvider from "./User";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";
import { HabitsProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <ActivitiesProvider>
      <GoalsProvider>
        <UserProvider>
          <GroupsProvider>{children}</GroupsProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </UserProvider>
      </GoalsProvider>
    </ActivitiesProvider>
  );
};

export default Providers;
