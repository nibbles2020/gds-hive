import React from 'react';
import styles from './contactSection.scss';
import GoogleMap from 'google-map-react';
import { config } from 'config';

const createMapOptions = {
  scrollwheel: false,
  styles: [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{"invert_lightness": true}, {"saturation": 100}, {"lightness": 50}, {"gamma": 0.5}, {"hue": "#EA7A16"}]
  }]
};

export default () =>
  (
    <div className={styles['contact-us-container']}>
      <div className={styles['map']}>
        <GoogleMap
          options={createMapOptions}
          defaultCenter={{ lat: 1.3, lng: 103.789228 }}
          defaultZoom={18}/>
      </div>

      <div className={styles['details']}>
        <div className={styles['contact']}>
          <a href={`mailto:${config.resumeMailAddress}`}>{config.resumeMailAddress}</a><br />
          <a href="//www.gov.sg/sgdi/ministries/mci/statutory-boards/ida/departments/gciw/departments/gds">Directory</a>
        </div>

        <div className={styles['address']}>
          #08-01<br />
          Sandcrawler<br />
          1 Fusionopolis View<br />
          Singapore 138577
        </div>

        <div className={styles['getting-here']}>
          MRT: one-north (CC23)<br />
          Bus: 74, 91, 92, 95, 191, 196, 198, 200<br />
          Drivers may park their cars at Galaxis or Fusionopolis. Sandcrawler does not provide parking for visitors.
        </div>
      </div>
    </div>
  );
