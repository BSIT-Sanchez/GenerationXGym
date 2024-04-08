import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './Pages/HomeScreen'
import AdminDashboard from './Pages/AdminDashboard'
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
import BenchPress from './Pages/Upper/BenchPress'
import Squats from './Pages/Lower/Squats'
import Planks from './Pages/Core/Planks'
import Snatch from './Pages/Compound/Snatch'
import KettebellSwings from './Pages/Function/KettlebellSwings'
import DumbbellFlyes from './Pages/Isolation/DumbbellFlyes'

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Upper' element={<UpperList/>}/>
      <Route path='/Upper/BenchPress' element={<BenchPress/>}/>

      <Route path='/Lower' element={<LowerScreen/>}/>
      <Route path='/Lower/Squats' element={<Squats/>}/>

      <Route path='/Core' element={<CoreScreen/>}/>
      <Route path='/Core/Planks' element={<Planks/>}/>

      <Route path='/Function' element={<FunctionScreen/>}/>
      <Route path='/Function/KettlebellSwings' element={<KettebellSwings/>}/>

      <Route path='/Isolation' element={<IsolationScreen/>}/>
      <Route path='/Isolation/DumbbellFlyes' element={<DumbbellFlyes/>}/>

      <Route path='/Comp' element={<CompoundScreen/>}/>
      <Route path='/Comp/Snatch' element={<Snatch/>}/>

      <Route path='/instructor' element={<InstructorScreen/>}/>
      <Route path='/about' element={<AboutScreen/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
    </Routes>
  )
}

export default App
