import { Redirect, Route as ReactRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@BrutalHabits:token")

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
