import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { ThemeContext } from "./contexts/ThemeContext/themeContext";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./contexts/AuthContext/authContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [theme, setTheme] = useState("light"); // light | dark

  const onChangeTheme = () => {
    //Solution 1
    // const newTheme = theme === "light" ? "dark" : "light";
    // setTheme(newTheme);

    //Solution 2
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <ThemeContext.Provider
            value={{
              theme,
              onChangeTheme,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<PrivateRoute component={Homepage} />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </ThemeContext.Provider>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
