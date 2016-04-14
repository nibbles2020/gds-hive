import React from 'react';
import styles from './contactSection.scss';
import GoogleMap from 'google-map-react';

const createMapOptions = {
  scrollwheel: false,
  styles: [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{"invert_lightness": true}, {"saturation": 100}, {"lightness": 50}, {"gamma": 0.5}, {"hue": "#EA7A16"}]
  }]
};

export default () =>
  <div className={styles['contact-us-container']}>
    <div className={styles['map']}>
    <GoogleMap
        options={createMapOptions}
        defaultCenter={{ lat: 1.3, lng: 103.789228 }}
        defaultZoom={18}/>
    </div>
    <div className={styles['contact-details']}>
      <p>mail@example.com</p>
      <p>Sandcrawler</p>
    </div>
  </div>;
