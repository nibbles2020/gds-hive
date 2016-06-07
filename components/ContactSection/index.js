import React from 'react';
import styles from './contactSection.scss';
import GoogleMap from 'google-map-react';
import {config} from 'config';

const Pin = ({showPin}) => (showPin && <img src={require('./svg/pin.svg')}/>);
const createMapOptions = {
  scrollwheel: false,
  styles: [{
    "stylers": [
      {
        "hue": "#000000"
      },
      {
        "saturation": -100
      },
      {
        "lightness": -60
      }
    ]
  },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "color": "#FED00F"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {}
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        },
        {}
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {
          "lightness": 6
        },
        {
          "weight": "2"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {
          "lightness": -25
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {
          "lightness": -10
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {
          "lightness": 70
        }
      ]
    },
    {
      "featureType": "transit.line",
      "stylers": [
        {
          "color": "#FED00F"
        },
        {
          "lightness": 90
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    }
  ]

};


export default class ContactUs extends React.Component {
  state = {
    showPin: false
  };
  static mapCenter = { lat: 1.3, lng: 103.789228 };

  render() {
    return (
      <div className={styles['contact-us-container']}>
        <div className={styles.map}>
          <GoogleMap
            options={createMapOptions}
            defaultCenter={ContactUs.mapCenter}
            defaultZoom={18}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={(() => this.setState({showPin: true})).bind(this)} >
            <Pin lat={1.29991} lng={103.7892} showPin={this.state.showPin}/>
          </GoogleMap>
        </div>

        <div className={styles.details}>
          <div>
            <a href={`mailto:${config.resumeMailAddress}`}>{config.resumeMailAddress}</a><br />
            <a
              href="//www.gov.sg/sgdi/ministries/mci/statutory-boards/ida/departments/gciw/departments/gds">Directory</a>
          </div>

          <div className={styles.address}>
            #08-01<br />
            Sandcrawler<br />
            1 Fusionopolis View<br />
            Singapore 138577
          </div>

          <ul className={styles['unindent-list']}>
            <li className={styles['train-icon']}>one-north (CC23)</li>
            <li className={styles['bus-icon']}>74, 91, 92, 95, 191, 196, 198, 200</li>
            <li className={styles['car-icon']}>
              Drivers may park their cars at Galaxis or Fusionopolis.
              Sandcrawler does not provide parking for visitors.
            </li>
          </ul>

          <div>
            <a href="https://github.com/idagds/">Github</a><br />
            {/* <a href="https://www.linkedin.com/company/ida-singapore">LinkedIn</a><br /> */}
            <a href="https://medium.com/singapore-gds/">Medium</a>
          </div>
        </div>
      </div>
    );
  }
}
