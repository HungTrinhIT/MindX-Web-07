import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PageContainer = (props) => {
  const { shouldShowFooter = true, shouldShowHeader = true, title } = props;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {shouldShowHeader && (
        <header
          style={{
            backgroundColor: "black",
            height: "80px",
            color: "#ffffff",
          }}
        >
          <Link to="/">Homepage</Link>
          <br />
          <Link to="/account-settings">Account settings</Link>
        </header>
      )}

      <main className="page-body">{props.children}</main>

      {shouldShowFooter && (
        <footer
          style={{
            backgroundColor: "black",
            height: "80px",
            color: "#ffffff",
          }}
        >
          This is footer
        </footer>
      )}
    </div>
  );
};

export default PageContainer;
