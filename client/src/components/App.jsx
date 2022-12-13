import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import NoPage from "../pages/NoPage.jsx";
import Compose from "../pages/Compose.jsx";
import Drafts from '../pages/Drafts.jsx';

function App() {
  return (
    <BrowserRouter className = "App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="compose" element={<Compose />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
