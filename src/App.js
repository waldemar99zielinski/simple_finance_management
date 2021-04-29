import React, { useState, useEffect } from "react";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
//Components
import Navbar from "./navbar/index";
import Home from "./home/index";
import AddTransaction from "./add-transaction/index";
//navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <div className="content-container-max-width">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/add-transaction">
                <AddTransaction />
              </Route>
              <Route path="/stats">
                <h2>STATS</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

// export default withAuthenticator(App);
export default App;
