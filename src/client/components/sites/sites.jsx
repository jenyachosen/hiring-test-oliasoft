import React, {useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card, Heading, Column, Row, Spinner, Loader, Input} from '~gui-library';
import {SiteDetails} from './site-item';
import {sitesLoaded, siteActions} from "~store/entities/sites/sites";
import {selectSitesLoaded, selectSearchString, selectFilteredSites} from "~store/entities/sites/sites.selectors";
import {selectOilRigs, selectOilRigsLoaded} from "~store/entities/oil-rigs/oil-rigs.selectors";
import {oilRigsLoaded} from "~store/entities/oil-rigs/oil-rigs";
import styles from './sites.module.less';

const Sites = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchString);
  const sites = useSelector(selectFilteredSites);
  const oilRigs = useSelector(selectOilRigs);
  const loading = useSelector(selectSitesLoaded);
  const loadingOilRigs = useSelector(selectOilRigsLoaded);

  useEffect(() => {
    dispatch(sitesLoaded());
    dispatch(oilRigsLoaded());
  }, []);

  const updatedSites = useMemo(() => sites.map(site => {
    return site;
  }), [sites, oilRigs]);

  const onChangeSearch = (ev) => {
    dispatch(siteActions.setSearchString(ev.target.value));
  }

  const saveSiteId = (id) => {
    dispatch(siteActions.setSiteDetailsId(id));
  }

  console.log('updatedSites =>', updatedSites);
  console.log('listOfRigs =>', oilRigs);

  return (
    <Card
      heading={
        <Heading>List of oil sites</Heading>
      }
    >
      <Row>
        <Column>
          {loading || loadingOilRigs ? 
          <Loader text="Loading..." theme="light">
            <Spinner dark />
          </Loader> : 
          <div className={styles.sitesList}>
            <Input 
              value={searchValue}
              placeholder='Find site'
              name='search-sites' 
              onChange={onChangeSearch}
            />
            {sites.length && Object.keys(oilRigs).length ? (
              <ul>
                {sites.map(site => (
                  <SiteDetails 
                    saveSiteId={saveSiteId}
                    key={site.id} 
                    site={site} 
                    oilRigs={oilRigs} 
                  />
                ))}
              </ul>
            ) : (
              <em>None loaded</em>
            )}
          </div>}
        </Column>
      </Row>
    </Card>
  );
}

export {Sites};
