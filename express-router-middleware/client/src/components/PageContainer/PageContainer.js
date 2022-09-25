import React from "react";
import { Helmet } from "react-helmet";

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
        ></header>
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
