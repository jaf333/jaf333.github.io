import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  CheckCircle, 
  Lock,
  LogIn,
  LogOut,
  User,
  Weight,
  ArrowLeft
} from 'lucide-react';

// Datos de la rutina
const WORKOUT_DATA = [
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Jalón Agarre Estrecho", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Remo Horizontal Máquina (Espalda Alta)", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Remo Mancuerna Apoyado en Banco", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Pájaros Contractora", "Series": "4", "Repeticiones": "12 - 15" },
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Curl Bíceps Barra Z", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 1 - Tirón", "Ejercicio": "Curl Bíceps Inclinado con Mancuernas", "Series": "3+1 Dropset", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Press Hombro Inclinado Multipower 70°", "Series": "3", "Repeticiones": "6 - 8" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Press Plano Mancuernas", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Cruces de Polea Baja", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Elevaciones Laterales Polea", "Series": "4", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Polea Tríceps Doble Cuerda", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 2 - Empuje", "Ejercicio": "Ext. Tríceps Overhead Polea Alta Barra Z", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Sentadilla", "Series": "3", "Repeticiones": "6 - 8" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Peso Muerto Rumano", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Extensiones Cuádriceps", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Curl Femoral Sentado", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Elevaciones Gemelo de Pie", "Series": "4", "Repeticiones": "12 - 15" },
  { "Día/Bloque": "Día 3 - Pierna Core", "Ejercicio": "Rutina Core Interactiva", "Series": "N/A", "Repeticiones": "N/A" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Press Banca", "Series": "3", "Repeticiones": "4 - 6" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Remo Horizontal Máquina Neutro a Una Mano", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Contractora para Pectoral", "Series": "3+1 Dropset", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Jalón Prono al Pecho", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Curl Bíceps Bayesian desde Polea Baja", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 4 - Pecho Espalda Brazos", "Ejercicio": "Ext. Tríceps Tipo Katana", "Series": "3", "Repeticiones": "12 - 15" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Peso Muerto", "Series": "3", "Repeticiones": "4 - 6" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Press Hombros Inclinado Mancuernas 70°", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Prensa Inclinada", "Series": "3", "Repeticiones": "8 - 10" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Elevación Lateral Banco Inclinado 60°", "Series": "3", "Repeticiones": "10 - 12" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Facepull Prono", "Series": "3", "Repeticiones": "12 - 15" },
  { "Día/Bloque": "Día 5 - Pierna Hombro Abdomen", "Ejercicio": "Crunch Abdominal desde Polea Alta", "Series": "3", "Repeticiones": "12 - 15" }
];

// Componente Login mejorado con diseño Apple
const Login = ({ onLogin, isAuthenticated, onLogout }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulamos una carga
    await new Promise(resolve => setTimeout(resolve, 800));

    if (credentials.email === 'jaf@test.com' && credentials.password === '101123') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
          <User className="text-white/80" size={18} />
          <span className="text-white/80">Admin</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-lg text-red-300 rounded-full hover:bg-red-500/30 transition-colors"
        >
          <LogOut size={18} />
          Exit
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl" style={{ zIndex: -1 }} />
        
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 p-3 rounded-xl">
            <Dumbbell className="text-white w-8 h-8" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/80">Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/80">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 text-red-200 text-sm p-3 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium transition-all
              ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-700'}`}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <LogIn size={20} />
                Sign In
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

// Componente para una serie individual
const SetTracker = ({ serieIndex, completed, weight, onComplete, onWeightChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: serieIndex * 0.1 }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onComplete(serieIndex)}
        className={`p-1 rounded-full transition-colors ${
          completed
            ? 'text-green-400 hover:text-green-500'
            : 'text-gray-500 hover:text-gray-400'
        }`}
      >
        <CheckCircle size={20} />
      </motion.button>
      <div className="flex items-center gap-2">
        <Weight size={16} className="text-blue-400" />
        <input
          type="number"
          value={weight || ''}
          onChange={(e) => onWeightChange(serieIndex, e.target.value)}
          placeholder="kg"
          className="w-20 px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
      </div>
      <span className="text-white/50 text-sm">Set {serieIndex + 1}</span>
    </motion.div>
  );
};

SetTracker.propTypes = {
  serieIndex: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onComplete: PropTypes.func.isRequired,
  onWeightChange: PropTypes.func.isRequired
};

//

// Componente de Rutina de Entrenamiento mejorado
const WorkoutRoutine = ({ workoutData }) => {
    const [exerciseStatus, setExerciseStatus] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    const days = [...new Set(workoutData.map(item => item['Día/Bloque']))];
  
    useEffect(() => {
      if (!selectedDay && days.length > 0) {
        setSelectedDay(days[0]);
      }
    }, [days]);
  
    const getNumberOfSeries = (seriesStr) => {
      if (seriesStr === 'N/A') return 0;
      const match = seriesStr.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
    };
  
    const toggleSet = (exerciseId, setIndex) => {
      setExerciseStatus(prev => ({
        ...prev,
        [exerciseId]: {
          ...prev[exerciseId],
          sets: {
            ...prev[exerciseId]?.sets,
            [setIndex]: {
              ...prev[exerciseId]?.sets?.[setIndex],
              completed: !(prev[exerciseId]?.sets?.[setIndex]?.completed || false)
            }
          }
        }
      }));
    };
  
    const updateWeight = (exerciseId, setIndex, weight) => {
      setExerciseStatus(prev => ({
        ...prev,
        [exerciseId]: {
          ...prev[exerciseId],
          sets: {
            ...prev[exerciseId]?.sets,
            [setIndex]: {
              ...prev[exerciseId]?.sets?.[setIndex],
              weight: weight
            }
          }
        }
      }));
    };
  
    const calculateProgress = (day) => {
      const exercises = workoutData.filter(item => item['Día/Bloque'] === day);
      let totalSets = 0;
      let completedSets = 0;
  
      exercises.forEach(exercise => {
        const exerciseId = `${day}-${exercise.Ejercicio}`;
        const numSeries = getNumberOfSeries(exercise.Series);
        totalSets += numSeries;
  
        for (let i = 0; i < numSeries; i++) {
          if (exerciseStatus[exerciseId]?.sets?.[i]?.completed) {
            completedSets++;
          }
        }
      });
  
      return totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
    };
  
    return (
      <div className="space-y-8">
        {/* Navegación de días */}
        <motion.div 
          className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {days.map((day, index) => {
            const progress = calculateProgress(day);
            return (
              <motion.button
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl backdrop-blur-lg transition-all
                  ${selectedDay === day 
                    ? 'bg-white/15 border-2 border-white/20' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
              >
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-white/10"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
                      className="text-blue-500 transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                    {Math.round(progress)}%
                  </div>
                </div>
                <span className="text-white/80 text-sm whitespace-nowrap">
                  {day.replace('Día ', 'Day ')}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
  
        {/* Ejercicios del día seleccionado */}
        <AnimatePresence mode="wait">
          {selectedDay && (
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {workoutData
                .filter(item => item['Día/Bloque'] === selectedDay)
                .map((exercise, index) => {
                  const exerciseId = `${selectedDay}-${exercise.Ejercicio}`;
                  const numSeries = getNumberOfSeries(exercise.Series);
                  const seriesArray = Array.from({ length: numSeries });
  
                  return (
                    <motion.div
                      key={exerciseId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-medium text-white">{exercise.Ejercicio}</h4>
                          <p className="text-white/60 text-sm">
                            {exercise.Series} series × {exercise.Repeticiones} reps
                          </p>
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-full">
                          <span className="text-white/80 text-sm">
                            {seriesArray.filter((_, i) => exerciseStatus[exerciseId]?.sets?.[i]?.completed).length} / {numSeries}
                          </span>
                        </div>
                      </div>
                      
                      {numSeries > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {seriesArray.map((_, serieIndex) => (
                            <SetTracker
                              key={serieIndex}
                              serieIndex={serieIndex}
                              completed={exerciseStatus[exerciseId]?.sets?.[serieIndex]?.completed || false}
                              weight={exerciseStatus[exerciseId]?.sets?.[serieIndex]?.weight || ''}
                              onComplete={(index) => toggleSet(exerciseId, index)}
                              onWeightChange={(index, weight) => updateWeight(exerciseId, index, weight)}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  WorkoutRoutine.propTypes = {
    workoutData: PropTypes.arrayOf(PropTypes.shape({
      'Día/Bloque': PropTypes.string.isRequired,
      'Ejercicio': PropTypes.string.isRequired,
      'Series': PropTypes.string.isRequired,
      'Repeticiones': PropTypes.string.isRequired
    })).isRequired
  };
  
  // Componente Principal
  const WorkoutSection = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          navigate('/');
        }
      };
  
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }, [navigate]);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Efectos de fondo */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl" />
        </div>
  
        {/* Contenido principal */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4"
                >
                  <button
                    onClick={() => navigate('/')}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <ArrowLeft className="text-white/80" />
                  </button>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    <Dumbbell className="text-blue-400" />
                    Workout Tracking
                  </h2>
                </motion.div>
  
                <Login 
                  onLogin={() => setIsAuthenticated(true)}
                  onLogout={() => setIsAuthenticated(false)}
                  isAuthenticated={isAuthenticated}
                />
              </div>
  
              {isAuthenticated ? (
                <WorkoutRoutine workoutData={WORKOUT_DATA} />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center max-w-md mx-auto"
                >
                  <Lock className="mx-auto text-white/40 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Login Required
                  </h3>
                  <p className="text-white/60">
                    Please login to view and track your workout routine
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WorkoutSection;