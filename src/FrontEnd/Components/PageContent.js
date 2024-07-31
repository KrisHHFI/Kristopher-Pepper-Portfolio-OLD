import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import SplitLayout from './SplitLayout';
import PageTitle from './PageTitle';
import GitHubRepositories from './GitHubRepositories';

const PageContent = ({ pageTitle, hasFullPageCarousel, hasSplitLayout, hasGitHubRepositories, imageSources, noBulletPoints, text }) => {
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
          noBulletPoints={noBulletPoints} // Pass the noBulletPoints prop to SplitLayout
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
  text: PropTypes.arrayOf(PropTypes.string), // Updated to arrayOf(PropTypes.string)
  noBulletPoints: PropTypes.bool, // Add noBulletPoints as a prop type
};

PageContent.defaultProps = {
  hasFullPageCarousel: false,
  hasSplitLayout: false,
  hasGitHubRepositories: false,
  noBulletPoints: false, // Default to showing bullet points
};

export default PageContent;
