import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";

export const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-950 text-white flex">
      <Navigation />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
