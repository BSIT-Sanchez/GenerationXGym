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
import BenchPress from './Pages/Barbell/Benchpress/BenchPress' 
import BenchDetails from './Pages/Barbell/Benchpress/BenchDetails'
import CrunchFloor from './Pages/BodyWeight/CrunchFloor/CrunchFloor'
import CrunchDetails from './Pages/BodyWeight/CrunchFloor/CrunchDetails'
import CableCurl from './Pages/Cable/CableCurl/CableCurl'
import CableCurlDetails from './Pages/Cable/CableCurl/CableCurlDetails'
import StepUp from './Pages/Dumbbell/StepUp/StepUp'
import StepUpDetails from './Pages/Dumbbell/StepUp/StepUpDetails'
import KettebellSwing from './Pages/Kettebell/kettebellSwing/KettebellSwing'
import KettebellSwingDetails from './Pages/Kettebell/kettebellSwing/KettebellSwingDetails'
import SmithSquatDetails from './Pages/Machine/smithsquat/SmithSquatDetails'
import SmithSquat from './Pages/Machine/smithsquat/SmithSquat'



function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Barbell' element={<UpperList/>}/>
      <Route path='/Barbell/BenchPress' element={<BenchPress/>}/>
      <Route path='/Barbell/BenchPress/video' element={<BenchDetails/>}/>

      <Route path='/BWeight' element={<LowerScreen/>}/>
      <Route path='/BWeight/CrunchFloor' element={<CrunchFloor/>}/>
      <Route path='/BWeight/CrunchFloor/video' element={<CrunchDetails/>}/>

      <Route path='/Cable' element={<CoreScreen/>}/>
      <Route path='/Cable/CableCurl' element={<CableCurl/>}/>
      <Route path='/Cable/CableCurl/video' element={<CableCurlDetails/>}/>

      <Route path='/Dumbbell' element={<FunctionScreen/>}/>
      <Route path='/Dumbbell/Step-Up' element={<StepUp/>}/>
      <Route path='/Dumbbell/Step-Up/video' element={<StepUpDetails/>}/>

      <Route path='/Kettlebell' element={<IsolationScreen/>}/>
      <Route path='/Kettlebell/KettlebellSwing' element={<KettebellSwing/>}/>
      <Route path='/Kettlebell/KettlebellSwing/video' element={<KettebellSwingDetails/>}/>

      <Route path='/Machine' element={<CompoundScreen/>}/>
      <Route path='/Machine/SmithSquat' element={<SmithSquat/>}/>
      <Route path='/Machine/SmithSquat/video' element={<SmithSquatDetails/>}/>

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
