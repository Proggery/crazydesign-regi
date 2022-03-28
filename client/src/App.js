import React, { useState } from "react";
import "./css/app.scss";
import { Route, Switch, HashRouter } from "react-router-dom";

// Layout-ok / keretek
import FrontPage from "./layouts/frontPage.jsx";
import HomePage from "./layouts/homePage.jsx";

// Oldalak
import Front from "./pages/front/Front.jsx";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/error/Error.jsx";
import Admin from "./admin/Admin";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const backgroundTheme = () => {
    setDarkMode(!darkMode);
  };

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component backgroundTheme={backgroundTheme} darkMode={darkMode} setDarkMode={setDarkMode} {...props}></Component>
        </Layout>
      )}
    ></Route>
  );

  return (
    <HashRouter>
      <Switch>
        {/* ELŐOLDAL */}
        <AppRoute exact path="/" layout={FrontPage} component={Front} />
        {/* FŐOLDAL */}
        <AppRoute exact path="/home" layout={HomePage} component={Home} />
        {/* ADMIN */}
        <AppRoute exact path="/admin" layout={HomePage} component={Admin} />
        {/* HIBAOLDAL */}
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}

export default App;
