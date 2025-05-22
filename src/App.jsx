import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Thank } from "./components";
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