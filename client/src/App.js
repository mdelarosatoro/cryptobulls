import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
