import React from 'react';
import PropTypes from 'prop-types';
import {Card, Drawer, List, Text} from '~gui-library';
import styles from './site-details.module.less';

export const SiteDetails = ({site}) => {
  const items = site.oilRigs
    .filter(rig => rig)
    .map(rig => ({...rig, details: rig.manufacturer}));

  return (
    <div className={styles.siteDetails}>
      <Card>
        <Text>{site.name}</Text>
        <p>{site.country}</p>
        <Drawer open background="#f5f7f9">
          <List
            list={{
              name: 'Oil Rigs',
              items
            }}
            bordered
          />
        </Drawer>
      </Card>
    </div>
  )
}

SiteDetails.propTypes = {
  site: PropTypes.object
};