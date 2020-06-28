import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

// import InlineCode from "components/InlineCode";
import Quote from "./Quote";
import Header from "./header";
// import MDXWrapper from "components/MDXWrapper";
// import Code from "components/modules/code/Code";

const components = {
  // h1: Heading.H1,
  // h2: Heading.H2,
  // // …
  // p: Text,
  blockquote: Quote,
  pre: (props) => <>{props.children}</>, //pre wraps code blocks with ``` so get rid of the pre wrapper with this
  // code: Code,
  // inlineCode: InlineCode,
  // wrapper: MDXWrapper,
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <MDXProvider components={components}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          <div className="bg-red-500 text-3xl w-full text-center">
            HELP MEEEE
          </div>
          {children}
        </div>
      </MDXProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
