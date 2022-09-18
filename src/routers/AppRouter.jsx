import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { HomeScreen } from "../components/home/HomeScreen";
import ScrollToTop from "../components/shared/ScrollToTop";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/lista" element={<HomeScreen />} />
          <Route path="/*" element={<Navigate to="/lista" />} />
        </Routes>
      </Router>
    </>
  );
};
