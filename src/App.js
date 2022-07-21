import { Routes, Route } from "react-router-dom";
import "./index.scss";
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import Profile from './components/Profile/Profile';
import RecycleBin from './components/RecycleBin/RecycleBin';
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project/Project";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/recycle-bin" element={<RecycleBin/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
