import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import SplitLayout from './SplitLayout';
import PageTitle from './PageTitle';
import GitHubRepositories from './GitHubRepositories';

const PageContent = ({ pageTitle, hasFullPageCarousel, hasIcons, hasSplitLayout, hasGitHubRepositories, imageSources, noBulletPoints, hideOnMobileView, text }) => {
  return (
    <div className="pageContent">
      {hasFullPageCarousel && (
        <Carousel
          imageSources={imageSources}
        />
      )}
      {hasSplitLayout && (
        <SplitLayout
          hasIcons={hasIcons}
          imageSources={imageSources}
          hideOnMobileView={hideOnMobileView}
          text={text}
          noBulletPoints={noBulletPoints}
        />
      )}
      {hasGitHubRepositories && (
        <GitHubRepositories />
      )}
      <PageTitle
        pageTitle={pageTitle}
      />
    </div>
  );
};

PageContent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  hasFullPageCarousel: PropTypes.bool,
  hasSplitLayout: PropTypes.bool,
  hasGitHubRepositories: PropTypes.bool,
  imageSources: PropTypes.object.isRequired,
  hideOnMobileView: PropTypes.bool,
  text: PropTypes.arrayOf(PropTypes.string),
  noBulletPoints: PropTypes.bool,
};

PageContent.defaultProps = {
  hasFullPageCarousel: false,
  hasSplitLayout: false,
  hasGitHubRepositories: false,
  noBulletPoints: false,
};

export default PageContent;
