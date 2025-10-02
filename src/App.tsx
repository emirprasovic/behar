import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import OverviewPage from "./pages/OverviewPage";
import ARViewPage from "./pages/ARViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<LandingPage />} />
          <Route index path="/destination/:id" element={<OverviewPage />} />
          <Route path="/destination/:id/ar" element={<ARViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
