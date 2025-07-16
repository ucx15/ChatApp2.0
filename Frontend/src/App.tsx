import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import AuthPage from './pages/Auth/auth.page'
import HomePage from './pages/Home/home.page'
import NotFoundPage from './pages/NotFound/notfound.page'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
