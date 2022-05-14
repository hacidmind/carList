// import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Example from './components/Example';
import ErrPage from './components/ErrPage';
import BlogPage from './components/BlogPage';
import Faq from './Faq';
import NewBlog from './components/NewBlog';
// import Example from './components/Example';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/example" element={<Example />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/addblog" element={<NewBlog />} />
        <Route path="*" element={<ErrPage />} />
        <Route path="/blog/:id" element={ <BlogPage /> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
