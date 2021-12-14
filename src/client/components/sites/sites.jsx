import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector, connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {Card, Heading, Column, Row} from '~gui-library';
import {SiteItem} from './site-item';
import {sitesLoaded, siteActions} from "~store/entities/sites/sites";
import {selectSitesLoaded, getSitesData, selectSearchString} from "~store/entities/sites/sites.selectors";
import {selectOilRigsLoaded} from "~store/entities/oil-rigs/oil-rigs.selectors";
import {oilRigsLoaded} from "~store/entities/oil-rigs/oil-rigs";
import styles from './sites.module.less';
import {Load} from '../loader/loader';
import {SearchInput} from '../search-input/search-input';
import {NoneLoaded} from '../none-loaded/none-loaded';

const Sites = ({sites}) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectSitesLoaded);
  const loadingOilRigs = useSelector(selectOilRigsLoaded);
  const searchValue = useSelector(selectSearchString);
  
  useEffect(() => {
    dispatch(sitesLoaded());
    dispatch(oilRigsLoaded());
  }, []);

  const onChangeSearch = (ev) => {
    dispatch(siteActions.setSearchString(ev.target.value));
  }

  return (
    <Card
      heading={
        <Heading>List of oil sites</Heading>
      }
    >
      <Row>
        <Column>
          {loading || loadingOilRigs ? 
          <Load /> : 
          <div className={styles.sitesList}>
            <SearchInput value={searchValue} onChange={onChangeSearch} />
            {sites.length ? (
              <ul>
                {sites.map((site, index) => (
                  <SiteItem
                    key={index} 
                    site={site} 
                  />
                ))}
              </ul>
            ) : (
              <NoneLoaded text='None loaded' />
            )}
          </div>}
        </Column>
      </Row>
    </Card>
  );
}

Sites.propTypes = {
  sites: PropTypes.array
};

const mapStateToProps = () => {
  const getSites = getSitesData();
  return (state, props) => {
    return {
      sites: getSites(state, props)
    };
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(Sites);
