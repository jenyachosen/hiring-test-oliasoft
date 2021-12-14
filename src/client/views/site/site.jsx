import React from 'react';
import PropTypes from 'prop-types';
import {Heading, Page, Button} from '~gui-library';
import {SiteDetails} from "~client/components/site-details/site-details";
import {Link} from "react-router-dom";
import  {getSelectedSiteDetails } from "~store/entities/sites/sites.selectors";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import styles from './site.module.less';

const Site = ({site}) => {
  return (
    <div className={styles.siteHeader}>
      <Page left={0}>
        <Heading top>Hiring Challenge</Heading>
        <Link to="/">
          <Button
            name="example"
            label="Back to the main view"
            colored="orange"
          />
        </Link>
        {site && <SiteDetails site={site}/>}
      </Page>
    </div>
  );
};

Site.propTypes = {
  site: PropTypes.object
};

const mapStateToProps = () => {
  const getSite = getSelectedSiteDetails();
  return (state, props) => {
    return {
      site: getSite(state, props)
    };
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(Site);