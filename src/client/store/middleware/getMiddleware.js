import {getDefaultMiddleware} from "@reduxjs/toolkit";
import {routerMiddleware} from "connected-react-router";
import api from "./api";

const defaultMiddleware = getDefaultMiddleware({});

const getMiddleware = (history) => [
  ...defaultMiddleware,
  ...(history ? [routerMiddleware(history)] : []),
  api
];

export default getMiddleware;
