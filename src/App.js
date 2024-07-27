import React from 'react';
import './App.css';
import ImageCarousel from './FrontEnd/Components/ImageCarousel';
import CarouselTitle from './FrontEnd/Components/CarouselTitle';
import { BWPortraitImageSources, ComponentImageSources } from './BackEnd/ImageSources';

function App() {
  return (
    <div className="App">
      <ImageCarousel
        imageSources={BWPortraitImageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
      <CarouselTitle carouselTitleText="BW Portraits" />
    </div>
  );
}

export default App;
