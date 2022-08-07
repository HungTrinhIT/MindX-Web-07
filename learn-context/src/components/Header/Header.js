import { useThemeContext } from "../../contexts/ThemeContext/themeContext";

const Header = (props) => {
  const themeCtx = useThemeContext();
  const { theme, onChangeTheme } = themeCtx;
  const styles =
    theme === "light"
      ? {
          border: "1px solid black",
          padding: "24px",
          margin: "24px",
          borderRadius: "8px",
        }
      : {
          border: "1px solid black",
          padding: "24px",
          margin: "24px",
          borderRadius: "8px",
          backgroundColor: "black",
          color: "white",
        };
  return (
    <header style={styles}>
      <button onClick={onChangeTheme}>Change theme: {theme}</button>
    </header>
  );
};

export default Header;
