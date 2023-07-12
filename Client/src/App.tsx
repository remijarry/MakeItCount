import './styles/index.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page.js";
import ExercisePlan from './pages/exercise-plan.js';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exercise-plan" element={<ExercisePlan />} />
    </Routes>
  )
}

export default App
