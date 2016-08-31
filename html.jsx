import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import favicon from 'pages/favicon.png';

const Html = (props) => {
  let title;
  title = DocumentTitle.rewind();
  if (props.title) {
    title = props.title;
  }
  // const css = process.env.NODE_ENV === 'production' && <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0" />
        <title>{props.title || 'Singapore Government Digital Services'}</title>
        {/* favicon will work for production, and not in dev */}
        <link href={prefixLink(`/${favicon}`)} rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
        <link rel="stylesheet" type="text/css" href={prefixLink('/styles.css')} />
        { /* css */ }
        <link href="//fonts.googleapis.com/css?family=Catamaran:500" rel="stylesheet" type="text/css" />
        <link href="//fonts.googleapis.com/css?family=Quattrocento+Sans:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oswald:400,300,700" rel="stylesheet" type="text/css" />
      </head>

      <body className="landing-page">
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src={prefixLink('/bundle.js')} />
      </body>
    </html>
  );
};

Html.propTypes = {
  body: React.PropTypes.string,
  favicon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Html;
