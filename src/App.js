import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Profile from './components/Profile';
import RecycleBin from './components/RecycleBin';
import Projects from "./components/Projects";
import Board from './components/Board';
import { GoogleLogin } from 'react-google-login';


function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />,
    
    <Routes>
        <Route path="/" element={<Register/>} exact/>
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/recycle-bin" element={<RecycleBin/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/board" element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;
