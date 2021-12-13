import React from 'react';
import {Heading, Page} from '~gui-library';
import {OilRigs} from "~client/components/oil-rigs/oil-rigs";
import {Link} from "react-router-dom";

export const Oil = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Link to="/">Back to the main view</Link>
      <OilRigs/>
    </Page>
  );
};