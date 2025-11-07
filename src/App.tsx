import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<WorkInProgress />} />
        <Route path="/dashboard" element={<WorkInProgress />} />
        <Route path="/education" element={<WorkInProgress />} />
        <Route path="/wip" element={<WorkInProgress />} />
      </Routes>
    </Suspense>
  );
}

export default App;
