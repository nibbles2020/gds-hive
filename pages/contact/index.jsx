import React from 'react';
import GoogleMap from 'google-map-react';
import styles from './contact.scss';

const createMapOptions = {
  scrollwheel: false,
  styles: [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{"invert_lightness": true}, {"saturation": 100}, {"lightness": 50}, {"gamma": 0.5}, {"hue": "#EA7A16"}]
  }]
};

export default () => {
  return (
    <div>
      <div>
        <p>mail@example.com</p>
        <p>Sandcrawler</p>
      </div>

      <div className={styles.map}>
        <GoogleMap
          options={createMapOptions}
          defaultCenter={{ lat: 1.3, lng: 103.789228 }}
          defaultZoom={18}
        />&nbsp;
      </div>
    </div>
  );
};
