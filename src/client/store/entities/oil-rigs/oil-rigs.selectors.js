import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state.entities.oilRigs;
export const selectSearchString = (state) => state.entities.oilRigs.searchString;

const listOfOilRigs = createSelector(
  selectSelf,
  (state) => state.listOfRigs.reduce((acc, rig) => {
    return [...acc, {...rig, details: rig.manufacturer}]
  }, [])
);

export const selectFilteredRigs = createSelector(
  selectSearchString,
  listOfOilRigs,
  (search, rigs) => search.length > 1 ? rigs.filter(rig => {
    const lowerSearch = search.toLowerCase();
    const lowerNames = rig.name.toLowerCase().split(' ');
    return lowerNames.some(name => name.indexOf(lowerSearch) === 0);
  }) : rigs
);

export const selectOilRigs = createSelector(
  selectSelf,
  (state) => state.listOfRigs.reduce((acc, item) => {
    return {...acc, [item.id]: item};
  }, {})
);

export const selectOilRigsLoaded = createSelector(
  selectSelf,
  (state) => state.loading
);
