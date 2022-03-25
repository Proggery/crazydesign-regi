import React, { useState } from "react";
import "./css/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout-ok / keretek
import FrontPage from "./layouts/frontPage.jsx";
import HomePage from "./layouts/homePage.jsx";

// Oldalak
import Front from "./pages/front/Front.jsx";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/error/Error.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = () => {
    setDarkMode(!darkMode);
  };

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component theme={theme} darkMode={darkMode} {...props}></Component>
        </Layout>
      )}
    ></Route>
  );

  return (
    <Router>
      <Switch>
        {/* Előoldal */}
        <AppRoute exact path="/" layout={FrontPage} component={Front} />
        {/* Főoldal */}
        <AppRoute exact path="/home" layout={HomePage} component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
