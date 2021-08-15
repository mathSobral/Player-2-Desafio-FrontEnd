import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

export interface RoutesPrivateProps {
  isAuthenticated: boolean;
  component: any;
}

const RoutesPrivate: React.FC<RoutesPrivateProps & RouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default RoutesPrivate;
