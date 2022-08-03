import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { ThemeContext } from "./contexts/ThemeContext/ThemeContext";
const productData = [
  {
    id: 1,
    name: "Phone 12",
  },
  {
    id: 2,
    name: "Samsung",
  },
  {
    id: 3,
    name: "Nokia",
  },
];

const App = () => {
  const [products, setProducts] = useState(productData);
  const [theme, setTheme] = useState("light"); // light | dark

  const onChangeTheme = () => {
    //Solution 1
    // const newTheme = theme === "light" ? "dark" : "light";
    // setTheme(newTheme);

    //Solution 2
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{
          theme,
          onChangeTheme,
        }}
      >
        <Header />
        <ProductList data={products} />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
