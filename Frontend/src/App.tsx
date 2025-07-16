import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import AuthPage from './pages/Auth/auth.page'
// import HomePage from './pages/home.page'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
