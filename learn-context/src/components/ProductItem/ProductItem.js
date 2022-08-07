import { useThemeContext } from "../../contexts/ThemeContext/themeContext";

const ProductItem = ({ product }) => {
  const { name, id } = product;
  const themeCtx = useThemeContext();

  const styles =
    themeCtx.theme === "light"
      ? {
          border: "1px solid black",
          padding: "24px",
          margin: "24px",
          width: "50vw",
          borderRadius: "8px",
        }
      : {
          border: "1px solid black",
          padding: "24px",
          margin: "24px",
          width: "50vw",
          borderRadius: "8px",
          backgroundColor: "black",
          color: "white",
        };

  return (
    <div style={styles}>
      {id}: {name}
    </div>
  );
};
export default ProductItem;
