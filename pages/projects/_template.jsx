import React from 'react';
//import { RouteHandler, Link, State, Navigation } from 'react-router';
import { RouteHandler, Link } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import Typography from 'typography';
import { link, templateChildrenPages } from 'gatsby-helpers';

import typography from 'utils/typography';
import _ from 'lodash';
const { rhythm, fontSizeToPx } = typography;


export default class extends React.Component {

  //mixins: [State, Navigation],
  //
  //handleTopicChange: function (e) {
  //  return this.transitionTo(e.target.value);
  //},

  render () {
    //var childPages, docOptions, docPages;
    console.log('state...........', this.props.state, templateChildrenPages(__filename, this.props.state));
    const childPages = _(templateChildrenPages(__filename, this.props.state).map(function (child) {
      if (child.data) {
        return {
          title: child.data.title,
          order: child.data.order,
          path: child.path
        };
      }
      return null;
    })).compact().sortBy(child => child.order);
    console.log('childPages', `${childPages.value()[0].path}thumbnail.jpg`);

    //childPages = sortBy(childPages, function(child) {
    //  return child.order;
    //});
    const docOptions = childPages.map(function (child) {
      return React.createElement("option", {
        "key": link(child.path),
        "value": link(child.path)
      }, child.title);
    }).value();


    const that = this;
    const docPages = childPages.map((function (_this) {
      return function (child) {

        const isActive = that.props.page.path === child.path;
        return (
          <li
            key={child.path}
            style={{
              marginBottom: rhythm(1/2)
            }}
            >
            <Link
              to={link(child.path)}
              style={{
                textDecoration: 'none'
              }}
              >
              {isActive ? <strong>{child.title}</strong> : child.title }
            </Link>
          </li>
        )
      };
    })(this)).value();

    console.log('current page path', this.props.page.path);

    return (
      <div>
        {/*<Breakpoint minWidth={700}>
         <div>
         <div
         style={{
         overflowY: 'auto',
         paddingRight: `calc(${rhythm(1/2)} - 1px)`,
         position: 'absolute',
         width: `calc(${rhythm(8)} - 1px)`,
         borderRight: '1px solid lightgrey'
         }}
         >
         <ul
         style={{
         listStyle: 'none',
         marginLeft: 0,
         marginTop: rhythm(1/2)
         }}
         >
         {docPages}
         </ul>
         </div>
         <div
         style={{
         padding: `0 ${rhythm(1)}`,ruby
         paddingLeft: `calc(${rhythm(8)} + ${rhythm(1)})`
         }}
         >
         <RouteHandler typography={typography} {...this.props}/>
         </div>
         </div>
         </Breakpoint>
         <Breakpoint maxWidth={700}>
         <strong>Topics:</strong>
         {' '}
         <select
         defaultValue={this.props.state.path}
         onChange={this.handleTopicChange}
         >
         {docOptions}
         </select>
         <br />
         <br />
         </Breakpoint>*/}

          <RouteHandler typography={typography} {...this.props}/>

      </div>

    );
  }
}

