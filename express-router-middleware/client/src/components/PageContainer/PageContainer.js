import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthState/AuthContext";

const PageContainer = (props) => {
  const { shouldShowFooter = true, shouldShowHeader = true, title } = props;

  const { state } = useContext(AuthContext);

  const { isAuthenticated } = state;

  const authNav = (
    <>
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/account-settings">Account settings</Link>
    </>
  );

  const notAuthNav = (
    <>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/login">Login</Link>
    </>
  );

  const navContent = isAuthenticated ? authNav : notAuthNav;
  const headerContent = shouldShowHeader && (
    <header
      style={{
        backgroundColor: "black",
        height: "80px",
        color: "#ffffff",
      }}
    >
      <Link to="/">Homepage</Link>
      <br />
      {navContent}
    </header>
  );
  const footerContent = shouldShowFooter && (
    <footer
      style={{
        backgroundColor: "black",
        height: "80px",
        color: "#ffffff",
      }}
    >
      This is footer
    </footer>
  );

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {headerContent}
      <main className="page-body">{props.children}</main>
      {footerContent}
    </div>
  );
};

export default PageContainer;
