import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import SplitLayout from './SplitLayout';
import PageTitle from './PageTitle';

const PageContent = ({ pageTitle, hasFullPageCarousel, hasSplitLayout, imageSources }) => {
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
  imageSources: PropTypes.object.isRequired,
};

PageContent.defaultProps = {
  hasFullPageCarousel: false,
};

export default PageContent;