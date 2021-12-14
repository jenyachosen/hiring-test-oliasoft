import React from 'react';
import PropTypes from 'prop-types';
import {Card, Text} from '~gui-library';
import {Link} from "react-router-dom";
import { NoneLoaded } from '../none-loaded/none-loaded';

export const SiteItem = ({site}) => {
  
  return (
    <li key={site.id}>
      <Link to={`site/${site.id}`}>
        <Card>
          <Text>{site.name}</Text>
          <p>{site.country}</p>
          {site.oilRigs.length ? (
            <ul>
              {site.oilRigs.map(rig => (rig && rig.id) && 
                <li key={rig.id}>
                  <Card>{rig.name}</Card>
                </li>
              )}
            </ul> 
          ) : <NoneLoaded text='None rigs' />}
        </Card>
      </Link>
    </li>
  )
}

SiteItem.propTypes = {
  site: PropTypes.object
};
