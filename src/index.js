import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route path="/" component={Home} exact />
      <Route component={() => <div>Pagina 404</div>} />
    </Switch>
    {/* <CadastroVideo />
    <CadastroCategoria /> */}
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);
