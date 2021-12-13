import React from 'react';
import {Card, Text} from '~gui-library';
import {Link} from "react-router-dom";

export const SiteDetails = ({site, oilRigs, saveSiteId}) => {
  
  return (
          <li onClick={() => saveSiteId(site.id)} key={site.id}>
            <Link to={`site/${site.id}`}>
            <Card>
              <Text>{site.name}</Text>
              <p>{site.country}</p>
              {site.oilRigs.length ? (
                <ul>
                  {site.oilRigs.map(rigId => <li key={rigId}>
                    {(oilRigs[rigId] && oilRigs[rigId].name) && <Card>{oilRigs[rigId].name}</Card>}
                  </li>)}
                </ul> 
              ) : <Text>None rigs</Text>}
            </Card>
            </Link>
          </li>
        )
}