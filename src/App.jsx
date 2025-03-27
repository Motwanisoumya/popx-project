import Home from '../PAGESPOPX/Home'
import './App.css'
import Signup from  '../PAGESPOPX/Signup';
import Login from '../PAGESPOPX/Login';
import Settings from '../PAGESPOPX/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
