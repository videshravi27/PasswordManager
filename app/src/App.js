import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './pages/Display'
import Navbar from './components/Navbar';
import AddPass from './components/AddPass';
import PostPass from './components/PostPass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<AddPass />} />
          <Route path="/display" element={<Display />} />
          <Route path="/post" element={<PostPass/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
