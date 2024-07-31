import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <img className="w-full" src="https://i.ibb.co/D5jhmhP/15647372361866-01.jpg" alt="" />
  </div>
);
const About = () => <div>About Page</div>;

export default App;
