import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import RoutesPrivate from "./components/Routes/Private";
import RoutesUnauthenticated from "./components/Routes/Unauthenticated";
import { RootState } from "./redux/rootReducer";
import Home from "./pages/Home";
import BanksHome from "./pages/Dashboard/Banks/Home";
import DashboardHome from "./pages/Dashboard/Home";
import Login from "./pages/Login";

const Routes: React.FC = () => {
  const { autenticated } = useSelector((state: RootState) => state.auth);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <RoutesUnauthenticated
          exact
          path="/login"
          component={Login}
          isAuthenticated={autenticated}
        />
        <RoutesPrivate
          exact
          path="/dashboard"
          component={DashboardHome}
          isAuthenticated={autenticated}
        />
        <RoutesPrivate
          exact
          path="/bancos"
          component={BanksHome}
          isAuthenticated={autenticated}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
