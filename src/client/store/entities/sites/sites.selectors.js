import { createSelector } from '@reduxjs/toolkit';
import {groupBy} from 'lodash';

const selectSitesState = (state) => {
  return state?.entities?.sites || []
};

const selectOilRigs = (state) => {
  const grouped = groupBy(state?.entities?.oilRigs?.listOfRigs, 'id')
  return grouped
};
export const selectSearchString = (state) => state.entities.sites.searchString?.toLowerCase();

const getUrlSiteId = (_, props) => {
  return props.match.params.id
};

export const getSitesData = () => createSelector(
  [selectSitesState, selectOilRigs, selectSearchString],
  (sites, oilRigs, query) => {
    const sitesWithRigs = sites?.list.filter(item => {
      return item.name.toLowerCase().includes(query)
    })?.map(site => ({
      ...site, 
      oilRigs: site.oilRigs.map((rigId) => {
        return oilRigs[rigId] && oilRigs[rigId][0]
      })
    }))

    return sitesWithRigs || [];
  }
);

export const getSelectedSiteDetails = () => createSelector(
  [getSitesData(), getUrlSiteId],
  (sites, siteId) => {
    return sites?.find(sites => sites.id === siteId)
  }
);

export const selectSiteDataForChart = createSelector(
  selectSitesState,
  (state) => {
    return state.list.reduce((acc, site) => {
      return [...acc, {name: site.name, countOfRigs: site.oilRigs.length || 0}]
    }, [])
  }
);

export const selectSitesLoaded = createSelector(
  selectSitesState,
  (state) => state.loading
);
