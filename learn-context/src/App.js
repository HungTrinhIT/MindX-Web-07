import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import { ThemeContext } from "./contexts/ThemeContext/themeContext";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AuthState from "./contexts/AuthContext/AuthState";

import "./App.css";

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
        <AuthState>
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
        </AuthState>
      </div>
    </Router>
  );
};

export default App;
