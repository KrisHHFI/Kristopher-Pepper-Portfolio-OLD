import { BandImageSources, BWPortraitImageSources, ColourPortraitSources, AboutPageImageSources, TicTacFarmImageSources, WeatherAppImageSources } from '../BackEnd/ImageSources';

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
    text: [
      'A farm themed Tic-tac-toe published on the Google Play Store',
      'Different grid sizes, local multiplayer, play against the computer, music and SFX',
      'More than 2000 unique installs',
      'Made in 2024 using React Native and JavaScript',
    ]
  },
  'React Weather App': {
    title: 'React Weather App',
    hasSplitLayout: true,
    imageSources: WeatherAppImageSources,
    section: 'Coding',
    text: [
      'A web based weather application',
      'Made to accommodate all screen sizes',
      'Uses OpenWeatherMap and REST API to fetch weather data',
      'Made in 2024 using React and TypeScript'
    ]
  },
  'GitHub Projects': {
    title: 'GitHub Projects',
    hasGitHubRepositories: true,
    imageSources: BandImageSources,
    section: 'Coding',
  },
  'Me': {
    title: 'Me',
    hasSplitLayout: true,
    imageSources: AboutPageImageSources,
    noBulletPoints: true,
    section: 'About',
    text: [
      'I\'m from a small town in the UK which is about an hour north of London. In my early twenties I' +
      'pursued a career in portrait photography and I moved to Finland.',
      'My career in photography wasn\'t working out and then the pandemic came which disrupted it entirely.' +
      ' During this time I discovered coding and I decided to study it Haaga-Helia in Helsinki.',
      'For my internship I worked as a web developer at the Game Development World Championship (GDWC).' +
      'After graduating, I worked as a software developer at Taika Tech. ',
      'Aside from the photography and coding, I have been doing manual labour work since I was 17 years old. ' +
      'Now, I am seeking full time employment as a software developer.'
    ]
  },
};

export default pages;
