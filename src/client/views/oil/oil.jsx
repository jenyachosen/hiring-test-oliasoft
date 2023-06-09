import React from 'react';
import {Heading, Page, Button} from '~gui-library';
import {OilRigs} from "~client/components/oil-rigs/oil-rigs";
import {Link} from "react-router-dom";
import styles from './oil.module.less';

export const Oil = ({}) => {
  return (
    <div className={styles.oilHeader}>
      <Page left={0}>
        <Heading top>Hiring Challenge</Heading>
        <Link to="/">
          <Button
            name="example"
            label="Back to the main view"
            colored="orange"
          />
        </Link>
        <OilRigs/>
      </Page>
    </div>
  );
};