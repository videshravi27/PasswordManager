import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Display from './pages/Display'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar';
import AddPass from './components/AddPass';
import PostPass from './components/PostPass';
// import StoredPass from './components/StoredPass';

function App() {
  const { user } = useAuthContext();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ user ? <AddPass /> : <Navigate to="/login"/>} />
          <Route path="/display" element={user ? <Display /> : <Navigate to="/login"/>} />
          <Route path="/post" element={user ? <PostPass/> : <Navigate to="/login"/>} />
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>} />
          {/* <Route path="/stored" element={<StoredPass/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
