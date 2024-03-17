import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Empform from './components/Empform';

function App() {
  return (
 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/empapp" element={<Dashboard />} />
          <Route path="/form" element={<Empform />} />
        </Routes>
      </div>
   
  );
}

export default App;
