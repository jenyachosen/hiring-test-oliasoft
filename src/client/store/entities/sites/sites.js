import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";
import {BASE_URL, SITES_URL} from "../constants";

const slice = createSlice({
  name: 'sites',
  initialState: {
    loading: false,
    list: [],
    searchString: ''
  },
  reducers: {
    setSearchString: (sites, action) => {
      sites.searchString = action.payload
    },
    sitesRequested: (sites) => {
      sites.loading = true;
    },
    sitesReceived: (sites, action) => {
      sites.list = action.payload;
      sites.loading = false;
    },
    sitesRequestFailed: (sites) => {
      sites.loading = false;
    },
  },
});

export const {
  sitesRequested,
  sitesReceived,
  sitesRequestFailed,
} = slice.actions;
export default slice.reducer;

export const sitesLoaded = () => apiCallBegan({
  baseUrl: BASE_URL,
  url: SITES_URL,
  onStart: sitesRequested.type,
  onSuccess: sitesReceived.type,
  onError: sitesRequestFailed.type,
});

export const siteActions = slice.actions;
