import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Jobs from "./Components/pages/Jobs/Jobs";
import Comunity from "./Components/pages/Community/Comunity";
import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import SignIn from "./Components/pages/Signin/Signin";
import Signup from "./Components/pages/Signup/Signup";
import Dashboard from "./Components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/community/:companie" element={<Comunity />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
