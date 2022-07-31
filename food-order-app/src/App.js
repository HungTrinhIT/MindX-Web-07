import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Header from "./layouts/Header";
import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
