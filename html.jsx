import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import favicon from 'pages/favicon.png';

export default class Html extends React.Component {
  render() {
    let title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0" />
          <title>{this.props.title}</title>
          <link href={favicon} rel="icon" type="image/x-icon" />
          <link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
          <link rel="stylesheet" type="text/css" href={link('/yellow.css')} />
          <link href="//fonts.googleapis.com/css?family=Catamaran:400,300,200,100,500,600,700,900,800')" rel="stylesheet" type="text/css" />
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={link('/bundle.js')} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  body: React.PropTypes.string,
  favicon: React.PropTypes.string,
  title: React.PropTypes.string
};
