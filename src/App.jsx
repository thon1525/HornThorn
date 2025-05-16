import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Thank } from "./components";
import MainPage from "./MainPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thank" element={<Thank />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;