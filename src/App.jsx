import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './Pages/HomeScreen'
import AdminDashboard from './Pages/AdminDashboard'
import InstructorDashboard from './Pages/InstructorDashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UpperList from './Pages/UpperList'
import InstructorScreen from './Pages/InstructorScreen'
import AboutScreen from './Pages/AboutScreen'
import Aos from 'aos'
import LowerScreen from './Pages/LowerScreen'
import CoreScreen from './Pages/CoreScreen'
import FunctionScreen from './Pages/FunctionScreen'
import IsolationScreen from './Pages/IsolationScreen'
import CompoundScreen from './Pages/CompoundScreen'
import BenchPress from './Pages/Barbell/BenchPress'
import Squats from './Pages/BodyWeight/Squats'
import Planks from './Pages/Cable/Planks'
import Snatch from './Pages/Machine/Snatch'
import KettebellSwings from './Pages/Dumbbell/KettlebellSwings'
import DumbbellFlyes from './Pages/Kettebell/DumbbellFlyes'
import BenchVideo from './Pages/Barbell/BenchVideo'


function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Barbell' element={<UpperList/>}/>
      <Route path='/Barbell/BenchPress' element={<BenchPress/>}/>
      <Route path='/Barbell/BenchPress/video' element={<BenchVideo/>}/>

      <Route path='/BodyWeight' element={<LowerScreen/>}/>
      <Route path='/BodyWeight/Squats' element={<Squats/>}/>

      <Route path='/Cable' element={<CoreScreen/>}/>
      <Route path='/Cable/Planks' element={<Planks/>}/>

      <Route path='/Dumbbell' element={<FunctionScreen/>}/>
      <Route path='/Dumbbell/KettlebellSwings' element={<KettebellSwings/>}/>

      <Route path='/Kettebell' element={<IsolationScreen/>}/>
      <Route path='/Kettebell/DumbbellFlyes' element={<DumbbellFlyes/>}/>

      <Route path='/Machine' element={<CompoundScreen/>}/>
      <Route path='/Machine/Snatch' element={<Snatch/>}/>

      <Route path='/instructor' element={<InstructorScreen/>}/>
      <Route path='/about' element={<AboutScreen/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/instructorDashboard' element={<InstructorDashboard/>}/>
    </Routes>
  )
}

export default App
