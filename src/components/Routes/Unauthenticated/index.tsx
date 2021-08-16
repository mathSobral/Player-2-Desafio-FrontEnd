import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

export interface RoutesUnauthenticatedProps {
  isAuthenticated: boolean;
  component: any;
}

const RoutesUnauthenticated: React.FC<RoutesUnauthenticatedProps & RouteProps> =
  ({ isAuthenticated, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          !isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    );
  };

export default RoutesUnauthenticated;
