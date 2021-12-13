import React from 'react';
import { useSelector } from 'react-redux';
import {Card, Drawer, List, Text} from '~gui-library';
import {selectSiteDetails} from "~store/entities/sites/sites.selectors";

export const SiteDetails = () => {
  const siteDetails = useSelector(selectSiteDetails);

  return <Card>
      <Text>{siteDetails.name}</Text>
      <p>{siteDetails.country}</p>
      <Drawer open background="#f5f7f9">
        <List
          list={{
            name: 'Oil Rigs',
            items: siteDetails.oilRigs,
          }}
          bordered
        />
      </Drawer>
    </Card>
}