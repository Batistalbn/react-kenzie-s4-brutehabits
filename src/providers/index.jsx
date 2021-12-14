import UserProvider from "./User";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </UserProvider>
  );
};

export default Providers;
