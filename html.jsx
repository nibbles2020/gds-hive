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
  const googleAnalaytics = `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-85059701-1', 'auto');
    ga('send', 'pageview');`;

  const themeColor = '#fed00f';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0" />
        <meta name="theme-color" content={themeColor} />
        <meta name="msapplication-navbutton-color" content={themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />
        <title>{props.title || 'Singapore Government Digital Services'}</title>
        {/* favicon will work for production, and not in dev */}
        <link href={favicon} rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
        <link rel="stylesheet" type="text/css" href={prefixLink('/styles.css')} />
        { /* css */ }
        <link href="//fonts.googleapis.com/css?family=Catamaran:500" rel="stylesheet" type="text/css" />
        <link href="//fonts.googleapis.com/css?family=Quattrocento+Sans:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oswald:400,300,700" rel="stylesheet" type="text/css" />
        <script dangerouslySetInnerHTML={{ __html: googleAnalaytics }} />
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
