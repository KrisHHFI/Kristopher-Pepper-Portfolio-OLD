import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const SplitLayout = ({ imageSources }) => {

  return (
    <div className="splitLayoutContainer">
      <div className="splitLayoutTile">
        {/* Optionally add content here */}
      </div>
      <div className="splitLayoutTile">
        {/* Optionally add content here */}
      </div>
    </div>
  );
};

SplitLayout.propTypes = {
  imageSources: PropTypes.object.isRequired,
};

export default SplitLayout;
