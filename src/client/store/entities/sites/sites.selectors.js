import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state.entities.sites;
const selectSites = (state) => state.entities.sites.list;
const selectOilRigs = (state) => state.entities.oilRigs.listOfRigs;
export const selectSearchString = (state) => state.entities.sites.searchString;

export const selectFilteredSites = createSelector(
  selectSearchString,
  selectSites,
  (search, sites) => search.length > 1 ? sites.filter(site => {
    const lowerSearch = search.toLowerCase();
    const lowerNames = site.name.toLowerCase().split(' ');
    return lowerNames.some(name => name.indexOf(lowerSearch) === 0);
  }) : sites
);

export const selectSiteDetails = createSelector(
  selectSelf,
  selectOilRigs,
  (state, oilRigs) => {
    const siteDetailsId = state.siteDetailsId;
    const site = state.list.find(site => site.id === siteDetailsId);
    const currentOilRigs = oilRigs.reduce((acc, rig) => {

      for (const siteRigId of site.oilRigs) {
        if (rig.id === siteRigId) {
          acc = [...acc, {name: rig.name, details: rig.manufacturer, id: rig.id}]
        }
      }

      return acc;
    }, []);

    return {...site, oilRigs: currentOilRigs}
  }
);

export const selectSitesLoaded = createSelector(
  selectSelf,
  (state) => state.loading
);
