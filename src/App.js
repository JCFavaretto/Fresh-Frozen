import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "config/routes";
import { CartProvider } from "context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </CartProvider>
  );
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
};

export default App;
