import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Landing from './Components/Landing';
import AddSkills from './Components/AddSkills';
import SkillCard from './Components/SkillCard';

function App() {

  return <div>
         <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/addskills' element={<AddSkills/>}/>
                    <Route path='/skillcard' element={<SkillCard/>}/>
                </Routes>
         </Router>
  </div>
}

export default App
