import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./component/navbar.jsx";
import NewsList from "./component/news_api.jsx";
import NewsDetails from "./pages/news_pages.jsx";
import Footer from "./component/footer.jsx";
import Business from "./pages/business.jsx";
import Sports from "./pages/sports.jsx";
import Technology from "./pages/tec.jsx";

function App() {
  return (
    <Router>
      <NavbarMenu />

      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
