import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FindStation from "./pages/FindStation/FindStation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-station" element={<FindStation />} />
      </Routes>
    </>
  );
}

export default App;
