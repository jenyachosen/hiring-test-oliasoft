import React from 'react';
import {Heading, Page} from '~gui-library';
import {Sites} from "~client/components/sites/sites";
import {Link} from "react-router-dom";

export const Main = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Link to="/oil">Show list of oils</Link>
      <Sites/>
    </Page>
  );
};
