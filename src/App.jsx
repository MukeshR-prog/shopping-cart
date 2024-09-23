import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Mainpage from "./components/mainpage/Mainpage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;