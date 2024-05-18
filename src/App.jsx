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
import FullSquat from './Pages/Barbell/Fullsquat/FullSquat'
import FullSquatDetails from './Pages/Barbell/Fullsquat/FullSquatDetails'
import DeadLift from './Pages/Barbell/Deadlift/DeadLift'
import DeadLiftDetails from './Pages/Barbell/Deadlift/DeadLiftDetails'
import ReverseCurl from './Pages/Barbell/ReverseCurl/ReverseCurl'
import ReverseCurlDetails from './Pages/Barbell/ReverseCurl/ReverseCurlDetails'
import FrontSquat from './Pages/Barbell/FrontSquat/FrontSquat'
import FrontSquatDetails from './Pages/Barbell/FrontSquat/FrontSquatDetails'
import InclineRow from './Pages/Barbell/InclineRow/InclineRow'
import InclineRowDetails from './Pages/Barbell/InclineRow/InclineRowDetails'
import PullUp from './Pages/BodyWeight/PullUp/PullUp'
import PullUpDetails from './Pages/BodyWeight/PullUp/PullUpDetails'
import PushUp from './Pages/BodyWeight/PushUp/PushUp'
import PushUpDetails from './Pages/BodyWeight/PushUp/PushUpDetails'
import FrontPlank from './Pages/BodyWeight/FrontPlank/FrontPlank'
import FrontPlankDetails from './Pages/BodyWeight/FrontPlank/FrontPlankDetails'
import ChestDip from './Pages/BodyWeight/ChestDip/ChestDip'
import ChestDipDetails from './Pages/BodyWeight/ChestDip/ChestDipDetails'
import ChinUp from './Pages/BodyWeight/ChinUp/ChinUp'
import ChinUpDetails from './Pages/BodyWeight/ChinUp/ChinUpDetails'
import PullDown from './Pages/Cable/PullDown/PullDown'
import PullDownDetails from './Pages/Cable/PullDown/PullDownDetails'
import BicepsCurl from './Pages/Cable/BicepsCurl/BicepsCurl'
import BicepsCurlDetails from './Pages/Cable/BicepsCurl/BicepsCurl.Details'
import HammerCurl from './Pages/Cable/HammerCurl/HammerCurl'
import HammerCurlDetails from './Pages/Cable/HammerCurl/HammerCurlDetails'
import PushDown from './Pages/Cable/PushDown/PushDown'
import PushDownDetails from './Pages/Cable/PushDown/PushDownDetails'
import SeatedRow from './Pages/Cable/SeatedRow/SeatedRow'
import SeatedRowDetails from './Pages/Cable/SeatedRow/SeatedRowDetails'
import LateralRaise from './Pages/Dumbbell/LateralRaise/LateralRaise'
import LateralRaiseDetails from './Pages/Dumbbell/LateralRaise/LateralRaiseDetails'
import Fly from './Pages/Dumbbell/Fly/Fly'
import FlyDetails from './Pages/Dumbbell/Fly/FlyDetails'
import ArnoldPress from './Pages/Dumbbell/ArnoldPress/ArnoldPress'
import ArnoldPressDetails from './Pages/Dumbbell/ArnoldPress/ArnoldPressDetails'
import PullOver from './Pages/Dumbbell/PullOver/PullOver'
import PullOverDetails from './Pages/Dumbbell/PullOver/PullOverDetails'
import KickBack from './Pages/Dumbbell/KickBack/KickBack'
import KickBackDetails from './Pages/Dumbbell/KickBack/KickBackDetails'
import Snatch from './Pages/Kettebell/Snatch/Snatch'
import SnatchDetails from './Pages/Kettebell/Snatch/SnatchDetails'
import SeasawPress from './Pages/Kettebell/SeasawPress/SeasawPress'
import SeasawPressDetails from './Pages/Kettebell/SeasawPress/SeasawPressDetails'



function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Barbell' element={<UpperList/>}/>
      <Route path='/Barbell/BenchPress' element={<BenchPress/>}/>
      <Route path='/Barbell/BenchPress/video' element={<BenchDetails/>}/>
      <Route path='/Barbell/FullSquat' element={<FullSquat/>}/>
      <Route path='/Barbell/FullSquat/video' element={<FullSquatDetails/>}/>
      <Route path='/Barbell/DeadLift' element={<DeadLift/>}/>
      <Route path='/Barbell/DeadLift/video' element={<DeadLiftDetails/>}/>
      <Route path='/Barbell/ReverseCurl' element={<ReverseCurl/>}/>
      <Route path='/Barbell/ReverseCurl/video' element={<ReverseCurlDetails/>}/>
      <Route path='/Barbell/FrontSquat' element={<FrontSquat/>}/>
      <Route path='/Barbell/FrontSquat/video' element={<FrontSquatDetails/>}/>
      <Route path='/Barbell/InclineRow' element={<InclineRow/>}/>
      <Route path='/Barbell/InclineRow/video' element={<InclineRowDetails/>}/>

      <Route path='/BWeight' element={<LowerScreen/>}/>
      <Route path='/BWeight/CrunchFloor' element={<CrunchFloor/>}/>
      <Route path='/BWeight/CrunchFloor/video' element={<CrunchDetails/>}/>
      <Route path='/BWeight/PullUp' element={<PullUp/>}/>
      <Route path='/BWeight/PullUp/video' element={<PullUpDetails/>}/>
      <Route path='/BWeight/PushUp' element={<PushUp/>}/>
      <Route path='/BWeight/PushUp/video' element={<PushUpDetails/>}/>
      <Route path='/BWeight/FrontPlank' element={<FrontPlank/>}/>
      <Route path='/BWeight/FrontPlank' element={<FrontPlankDetails/>}/>
      <Route path='/BWeight/ChestDip' element={<ChestDip/>}/>
      <Route path='/BWeight/ChestDip' element={<ChestDipDetails/>}/>
      <Route path='/BWeight/ChinUp' element={<ChinUp/>}/>
      <Route path='/BWeight/ChinUp/video' element={<ChinUpDetails/>}/>

      <Route path='/Cable' element={<CoreScreen/>}/>
      <Route path='/Cable/CableCurl' element={<CableCurl/>}/>
      <Route path='/Cable/CableCurl/video' element={<CableCurlDetails/>}/>
      <Route path='/Cable/PullDown' element={<PullDown/>}/>
      <Route path='/Cable/PullDown/video' element={<PullDownDetails/>}/>
      <Route path='/Cable/BicepsCurl' element={<BicepsCurl/>}/>
      <Route path='/Cable/BicepsCurl/video' element={<BicepsCurlDetails/>}/>
      <Route path='/Cable/HammerCurl' element={<HammerCurl/>}/>
      <Route path='/Cable/HammerCurl/video' element={<HammerCurlDetails/>}/>
      <Route path='/Cable/PushDown' element={<PushDown/>}/>
      <Route path='/Cable/PushDown/video' element={<PushDownDetails/>}/>
      <Route path='/Cable/SeatedRow' element={<SeatedRow/>}/>
      <Route path='/Cable/SeatedRow/video' element={<SeatedRowDetails/>}/>

      <Route path='/Dumbbell' element={<FunctionScreen/>}/>
      <Route path='/Dumbbell/Step-Up' element={<StepUp/>}/>
      <Route path='/Dumbbell/Step-Up/video' element={<StepUpDetails/>}/>
      <Route path='/Dumbbell/LateralRaise' element={<LateralRaise/>}/>
      <Route path='/Dumbbell/LateralRaise/video' element={<LateralRaiseDetails/>}/>
      <Route path='/Dumbbell/Fly' element={<Fly/>}/>
      <Route path='/Dumbbell/Fly/video' element={<FlyDetails/>}/>
      <Route path='/Dumbbell/ArnoldPress' element={<ArnoldPress/>}/>
      <Route path='/Dumbbell/ArnoldPress/video' element={<ArnoldPressDetails/>}/>
      <Route path='/Dumbbell/PullOver' element={<PullOver/>}/>
      <Route path='/Dumbbell/PullOver/video' element={<PullOverDetails/>}/>
      <Route path='/Dumbbell/KickBack' element={<KickBack/>}/>
      <Route path='/Dumbbell/KickBack/video' element={<KickBackDetails/>}/>

      <Route path='/Kettlebell' element={<IsolationScreen/>}/>
      <Route path='/Kettlebell/KettlebellSwing' element={<KettebellSwing/>}/>
      <Route path='/Kettlebell/KettlebellSwing/video' element={<KettebellSwingDetails/>}/>
      <Route path='/Kettlebell/Snatch' element={<Snatch/>}/>
      <Route path='/Kettlebell/Snatch/video' element={<SnatchDetails/>}/>
      <Route path='/Kettlebell/SeasawPress' element={<SeasawPress/>}/>
      <Route path='/Kettlebell/SeasawPress/video' element={<SeasawPressDetails/>}/>

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
