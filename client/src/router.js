import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';

import ProdAdd from './pages/Products/prod_add';
import ProdList from './pages/Products/prod_list';
import ProdUpdate from './pages/Products/prod_update';

import UserAdd from './pages/Users/user_add';
import UserList from './pages/Users/user_list';
import UserUpdate from './pages/Users/user_update';

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/produto/adicionar" component={ProdAdd} />
        <Route path="/produto/lista" component={ProdList} />
        <Route path="/produto-atualizar/:idProduct" component={ProdUpdate} />

        <Route path="/usuario/adicionar" component={UserAdd} />
        <Route path="/usuario/lista" component={UserList} />
        <Route path="/usuario-atualizar/:idUser" component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
}