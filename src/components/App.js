import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './Dashboard/Admin';
import Home from "./Pages/Home/Home";
import Login from "./Pages/LogReg/Login";
import Signup from './Pages/LogReg/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const Context = createContext();
const App = () => {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <Context.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;
