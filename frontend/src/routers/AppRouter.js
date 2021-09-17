import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";

const AppRouter = ({ theme, toggleTheme }) => {
  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
