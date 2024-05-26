import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './pages/Display'
import Navbar from './components/Navbar';
import AddPass from './components/AddPass';
import PostPass from './components/PostPass';
// import StoredPass from './components/StoredPass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<AddPass />} />
          <Route path="/display" element={<Display />} />
          <Route path="/post" element={<PostPass/>} />
          {/* <Route path="/stored" element={<StoredPass/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
