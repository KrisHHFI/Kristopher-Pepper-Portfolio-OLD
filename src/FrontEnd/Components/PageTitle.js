import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const PageTitle = ({ pageTitle }) => {

  return (
    <div className="pageTitle">
      {pageTitle}
    </div>
  );
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;