import { BrowserRouter, Routes, Route } from "react-router-dom";
import SriShannugha from "./SriShannugha";
import Submissions from "./Submissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SriShannugha />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
