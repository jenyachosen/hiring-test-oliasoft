import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";

const slice = createSlice({
  name: 'oilRigs',
  initialState: {
    loading: false,
    listOfRigs: [],
    searchString: '',
  },
  reducers: {
    setSearchString: (sites, action) => {
      sites.searchString = action.payload
    },
    oilRigsRequested: (oilRigs) => {
      oilRigs.loading = true;
    },
    oilRigsReceived: (oilRigs, action) => {
      oilRigs.listOfRigs = action.payload;
      oilRigs.loading = false;
    },
    oilRigsRequestFailed: (oilRigs) => {
      oilRigs.loading = false;
    },
  },
});

export const {
  oilRigsRequested,
  oilRigsReceived,
  oilRigsRequestFailed,
} = slice.actions;
export default slice.reducer;

const baseUrl = 'http://localhost:3000/api';
const url = '/oil-rigs';
export const oilRigsLoaded = () => apiCallBegan({
  baseUrl,
  url,
  onStart: oilRigsRequested.type,
  onSuccess: oilRigsReceived.type,
  onError: oilRigsRequestFailed.type,
});

export const rigsActions = slice.actions;
