import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";
import {BASE_URL, OIL_RIGS_URL} from "../constants";

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

export const oilRigsLoaded = () => apiCallBegan({
  baseUrl: BASE_URL,
  url: OIL_RIGS_URL,
  onStart: oilRigsRequested.type,
  onSuccess: oilRigsReceived.type,
  onError: oilRigsRequestFailed.type,
});

export const rigsActions = slice.actions;
