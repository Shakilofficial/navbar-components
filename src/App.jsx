import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnimatedCard from "./components/AnimatedCard";
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UseModal from "./components/UseModal";

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
    <div className="flex items-center justify-center min-h-screen p-4">
      <AnimatedCard>
        <h2 className="text-2xl font-bold mb-2">Card Title</h2>
        <p className="text-base">
          This is a reusable card component with a gradient background, using
          Tailwind CSS and Framer Motion.
        </p>
      </AnimatedCard>
    </div>
  </div>
);
const About = () => (
  <div>
    <Container>
      <Header title="My Application" subtitle="Welcome to the app" />
      <UseModal />
    </Container>
  </div>
);

export default App;
