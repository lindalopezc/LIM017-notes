import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Profile from './components/Profile';
import RecycleBin from './components/RecycleBin';
import Projects from "./components/Projects";
import Project from "./components/Project";
import Board from './components/Board';

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
        <Route path="/board" element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;
