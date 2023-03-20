import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'
import { Route,Routes,Switch } from "react-router-dom";
import CardDetail from "../cart/CardDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route exact path="/"  element={<Dashboard/>}/>
        <Route exact path="/product"  element={<Dashboard/>}/>
        <Route exact path="/cart"  element={<CardDetail/>}/>
      </Routes>
    </Container>
  );
}

export default App;
