import React from 'react';
import {Heading, Page, Button} from '~gui-library';
import {Chart} from "~client/components/chart/chart";
import {Link} from "react-router-dom";
import styles from './chart.module.less';

export const ChartView = ({}) => {
  return (
    <div className={styles.chartHeader}>
      <Page left={0}>
        <Heading top>Hiring Challenge</Heading>
        <Link to="/">
          <Button
            name="example"
            label="Back to the main view"
            colored="orange"
          />
        </Link>
        <Chart/>
      </Page>
    </div>
  );
};
