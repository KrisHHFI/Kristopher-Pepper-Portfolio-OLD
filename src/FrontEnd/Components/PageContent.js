import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import SplitLayout from './SplitLayout';
import PageTitle from './PageTitle';
import GitHubRepositories from './GitHubRepositories';

const PageContent = ({ pageTitle, hasFullPageCarousel, hasSplitLayout, hasGitHubRepositories, imageSources, text }) => {
  return (
    <div className="pageContent">
      {hasFullPageCarousel && (
        <Carousel
          imageSources={imageSources}
        />
      )}
      {hasSplitLayout && (
        <SplitLayout
          imageSources={imageSources}
          text={text}
        />
      )}
      {hasGitHubRepositories && (
        <GitHubRepositories
       
        />
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
  text: PropTypes.string,
};

PageContent.defaultProps = {
  hasFullPageCarousel: false,
};

export default PageContent;