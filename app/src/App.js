import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './pages/Display'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Display/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
