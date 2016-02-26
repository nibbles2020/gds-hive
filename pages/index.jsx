import React from 'react';
import styles from './index.scss';
import { config } from 'config';
import DocumentTitle from 'react-document-title';
import TechSection from 'components/TechSection';
import GoogleMap from 'google-map-react';


const createMapOptions =
{
  scrollwheel: false,
  styles: [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{"invert_lightness": true}, {"saturation": 100}, {"lightness": 50}, {"gamma": 0.5}, {"hue": "#EA7A16"}]
  }]
};


export default () =>
  (
    <DocumentTitle title={config.blogTitle}>
      <div>
          index start
        <div>
          <h1 className={styles.header}> Mission </h1>

          <p className={styles['body-text']}>
            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
            horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown
            belly, slightly domed and divided by arches into stiff sections.
          </p>

          <h1 className={styles.header}> Technology </h1>
          <TechSection icons={['devicon-javascript-plain',
          'devicon-react-original',
          'devicon-d3js-plain',
          'devicon-ruby-plain',
          'devicon-rails-plain',
          'devicon-python-plain',
          'devicon-linux-plain',
          'devicon-dot-net',
          'devicon-android-plain',
          'devicon-java-plain',
          'devicon-apple-original',
          'devicon-redhat-plain',
          'devicon-apache-plain',
          'devicon-docker-plain',
          'devicon-postgresql-plain']}/>

          <div> before</div>
          <div className={styles.map}>
            <GoogleMap
              options={createMapOptions}
              defaultCenter={{lat: 1.3, lng: 103.789228}}
              defaultZoom={18}/>
          </div>


          <div> after</div>

        </div>
      </div>
    </DocumentTitle>
  );
