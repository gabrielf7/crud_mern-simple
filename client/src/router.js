import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';

import ProdAdd from './pages/Products/prod_add';
import ProdList from './pages/Products/prod_list';
import ProdUpdate from './pages/Products/prod_update';

import UserAdd from './pages/Users/user_add';
import UserList from './pages/Users/user_list';
import UserUpdate from './pages/Users/user_update';

export const penvp = process.env.PUBLIC_URL;

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={penvp + '/'} exact component={Home} />

        <Route path={penvp + '/produto/adicionar'} component={ProdAdd} />
        <Route path={penvp + '/produto/lista'} component={ProdList} />
        <Route path={penvp + '/produto-atualizar/:idProduct'} component={ProdUpdate} />

        <Route path={penvp + '/usuario/adicionar'} component={UserAdd} />
        <Route path={penvp + '/usuario/lista'} component={UserList} />
        <Route path={penvp + '/usuario-atualizar/:idUser'} component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
}