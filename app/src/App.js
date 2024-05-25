import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './pages/Display'
import Navbar from './components/Navbar';
import AddPass from './components/AddPass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AddPass/>
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
