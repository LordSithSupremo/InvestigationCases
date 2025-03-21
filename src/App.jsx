import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Case from './routes/Case';
import Header from './components/Header';
import About from './components/About';
import CasesDetails from './routes/CasesDetails';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Case />
              </>
            } />
            <Route path="/cases/:id" element={<CasesDetails />} />
          </Routes>
        </main>
        
      </div>
    </Router>
    
  )
}

export default App


