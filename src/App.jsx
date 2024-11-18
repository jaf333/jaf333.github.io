import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CV from './components/cv';
import WorkoutSection from './components/WorkoutSection';

const SecretNav = () => {
  const navigate = useNavigate();
  const [keySequence, setKeySequence] = useState('');
  const secretCode = 'workout'; // La palabra secreta para acceder al workout

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = (keySequence + e.key).slice(-secretCode.length);
      setKeySequence(newSequence);
      
      if (newSequence === secretCode) {
        navigate('/workout');
        setKeySequence('');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [keySequence, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <SecretNav />
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/workout" element={<WorkoutSection />} />
      </Routes>
    </Router>
  );
}

export default App;