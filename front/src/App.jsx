import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from "./views/landing/Landing"
import Home from "./views/home/Home"
import FormJoin from './components/form/FormJoin'
import Projects from './components/projects/Projects'
import Articles from './components/articles/Articles'
import Documentarys from './components/documentarys/Documentarys'
import Detail from './views/detail/Detail';
import AboutUs from './views/about/AboutUs.jsx'
import Donar from './views/donar/Donar'
import { PostPAD } from './components/articles/PostPAD'
import FormLogin from './components/form/FormLogin'
import backimg from "./assets/BACKGOUDN_IMAGE_LANDING.png"
import UserOptions from './views/userOptions/UserOptions'
import AdminOptions from './views/adminOptions/adminOptions'
function App() {
  

 
  return (
    <div style={{
      backgroundImage: `url(${backimg})`,
 
      backgroundSize: "cover"
    }}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/formjoin" element={<FormJoin/>}/>
        <Route path="/formlogin" element={<FormLogin/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/documentarys" element={<Documentarys />}/>
        <Route path='/PAD/post' element={<PostPAD />} />  
        <Route path='/detail/:id' element={<Detail />} />  
        <Route path='/aboutUs' element={<AboutUs />} />  
        <Route path='/donar' element={<Donar />} />  
        <Route path='/useroptions' element={<UserOptions />} />  
        <Route path='/adminoptions' element={<AdminOptions />} />  
      </Routes>
    </div>
  )
}

export default App
