import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import { ComponentImageSources } from '../../BackEnd/ImageSources';

const PageContent = ({ pageTitle, imageSources }) => {
  return (
    <div className="pageContent">
      <Carousel
        pageTitle={pageTitle}
        imageSources={imageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
    </div>
  );
};

PageContent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  imageSources: PropTypes.object.isRequired,
};

export default PageContent;