import { BandImageSources, BWPortraitImageSources, ColourPortraitSources, TicTacFarmImageSources } from '../BackEnd/ImageSources';

const pages = {
  'BW Portraits': {
    title: 'BW Portraits',
    hasFullPageCarousel: true,
    imageSources: BWPortraitImageSources,
    section: 'Photography',
  },
  'Colour Portraits': {
    title: 'Colour Portraits',
    hasFullPageCarousel: true,
    imageSources: ColourPortraitSources,
    section: 'Photography',
  },
  'Bands': {
    title: 'Bands',
    hasFullPageCarousel: true,
    imageSources: BandImageSources,
    section: 'Photography',
  },
  'Tic Tac Farm': {
    title: 'Tic Tac Farm',
    hasSplitLayout: true,
    imageSources: TicTacFarmImageSources,
    section: 'Coding',
  },
  'This Site': {
    title: 'This Site',
    hasSplitLayout: true,
    imageSources: BandImageSources,
    section: 'Coding',
  },
  'React Weather App': {
    title: 'React Weather App',
    hasSplitLayout: true,
    imageSources: BandImageSources,
    section: 'Coding',
  },
  'Other Projects': {
    title: 'Other Projects',
    imageSources: BandImageSources,
    section: 'Coding',
  },
  'Me': {
    title: 'Me',
    imageSources: BandImageSources,
    section: 'About',
  },
  'Contact': {
    title: 'Contact',
    imageSources: BandImageSources,
    section: 'About',
  },
};

export default pages;