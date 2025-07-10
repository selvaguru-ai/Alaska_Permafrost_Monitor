import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WorkInProgress from "./components/WorkInProgress";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<WorkInProgress />} />
          <Route path="/dashboard" element={<WorkInProgress />} />
          <Route path="/education" element={<WorkInProgress />} />
          <Route path="/wip" element={<WorkInProgress />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
