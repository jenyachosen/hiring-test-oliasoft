import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {TopBar} from '~gui-library';
import Logo from '../../images/logo@2x.png';

import { SITE_PATH, OIL_RIGS_PATH, CHART_PATH } from './constants';

import { Main } from '../../views/main/main';
import Site from '../../views/site/site';
import { Oil } from '../../views/oil/oil';
import { ChartView } from '../../views/chart/chart';

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
        <Route path='/' exact component={Main} />
        <Route path={`${SITE_PATH}/:id`} exact component={Site} />
        <Route path={OIL_RIGS_PATH} exact component={Oil} />
        <Route path={CHART_PATH} exact component={ChartView} />
      </Switch>
    </>
  );
};
