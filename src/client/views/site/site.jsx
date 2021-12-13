import React from 'react';
import {Heading, Page} from '~gui-library';
import {SiteDetails} from "~client/components/site-details/site-details";
import {Link} from "react-router-dom";

export const Site = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Link to="/">Back to the main view</Link>
      <SiteDetails />
    </Page>
  );
};