import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthState from "./contexts/AuthState/AuthState";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import AccountSettingsPage from "./pages/AccountSettings/AccountSettingsPage";

function App() {
  return (
    <Router>
      <AuthState>
        <div className="App">
          <Routes>
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route
              path="/account-settings"
              element={<PrivateRoute component={AccountSettingsPage} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthState>
    </Router>
  );
}

export default App;
