import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import ProdAdd from './pages/Products/prod_add';
import ProdList from './pages/Products/prod_list';
import UserAdd from './pages/Users/user_add';
import UserList from './pages/Users/user_list';

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route path={process.env.PUBLIC_URL + '/produto/adicionar'} component={ProdAdd} />
        <Route path={process.env.PUBLIC_URL + '/produto/lista'} component={ProdList} />
        <Route path={process.env.PUBLIC_URL + '/usuario/adicionar'} component={UserAdd} />
        <Route path={process.env.PUBLIC_URL + '/usuario/lista'} component={UserList} />
      </Switch>
    </BrowserRouter>
  );
}