import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Contact from "./pages/Contact";
import LearningUseState from "./pages/LearningUseState";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/learningUseState" element={<LearningUseState/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;