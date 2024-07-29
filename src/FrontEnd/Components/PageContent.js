import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import PageTitle from './PageTitle';
import { ComponentImageSources } from '../../BackEnd/ImageSources';

const PageContent = ({ pageTitle, hasCarousel, imageSources }) => {
  return (
    <div className="pageContent">
      {hasCarousel && (
        <Carousel
          imageSources={imageSources}
          leftArrow={ComponentImageSources.leftArrow}
          rightArrow={ComponentImageSources.rightArrow}
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
  hasCarousel: PropTypes.bool,
  imageSources: PropTypes.object.isRequired,
};

PageContent.defaultProps = {
  hasCarousel: false,
};

export default PageContent;