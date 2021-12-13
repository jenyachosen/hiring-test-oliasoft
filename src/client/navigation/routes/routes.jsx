import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {TopBar} from '~gui-library';
import Logo from '../../images/logo@2x.png';

import { Main } from '../../views/main/main';
import { Oil } from '../../views/oil/oil';
import { Site } from '../../views/site/site';

export const Routes = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" />,
          label: 'Hiring Challenge'
        }}
      />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/oil" exact component={Oil} />
        <Route path="/site/:id" exact component={Site} />
      </Switch>
    </>
  );
};
