import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from "./views/landing/Landing"
import Home from "./views/home/Home"
import FormJoin from './components/form/FormJoin'
import Projects from './components/projects/Projects'
import Articles from './components/articles/articles'
import Detail from './views/detail/Detail';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/formjoin" element={<FormJoin/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/documentarys" element={<Projects />}/>
        <Route path='/detail/:id' element={<Detail />} />  
      </Routes>
    </div>
  )
}

export default App
