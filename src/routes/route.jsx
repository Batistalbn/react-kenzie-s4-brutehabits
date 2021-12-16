import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../providers/User";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useContext(UserContext);
  console.log(token)

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard/habits",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
