import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import { Nav } from './component/nav/Nav';
import About from './page/about/about';
import Education from './page/education/education';
import Project from './page/project/project';

function App() {
  return (
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/education" element={<Education />} />
    <Route path="/project" element={<Project />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
