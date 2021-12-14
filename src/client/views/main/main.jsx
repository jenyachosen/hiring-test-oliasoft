import React from 'react';
import {Heading, Page, Button} from '~gui-library';
import Sites from "~client/components/sites/sites";
import {Link} from "react-router-dom";
import styles from './main.module.less';

export const Main = () => {
  return (
    <div className={styles.mainHeader}>
      <Page left={0}>
        <Heading top>Hiring Challenge</Heading>
        <div className={styles.mainHeaderLinks}>
          <Link to="/oil">
            <Button
              name="example"
              label="Show list of oils"
              colored="orange"
            />
          </Link>
          <Link to="/chart">
            <Button
              name="example"
              label="Show chart"
              colored="green"
            />
          </Link>
        </div>
        <Sites/>
      </Page>
    </div>
  );
};
