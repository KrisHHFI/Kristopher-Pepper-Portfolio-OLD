import React from 'react';
import './App.css';
import Carousel from './FrontEnd/Components/Carousel';
import { BWPortraitImageSources, ComponentImageSources } from './BackEnd/ImageSources';

function App() {
  return (
    <div className="App">
      <Carousel
        carouselTitleText="BW Portraits"
        imageSources={BWPortraitImageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
    </div>
  );
}

export default App;
