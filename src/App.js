import logo from "./logo.svg";
import "./App.css";
const bootstrap = require("bootstrap");
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpForm from "./Components/form";
import Buttons from "./styleGuide/buttons";
import LandingPage from "./Components/landingPage";
import StyleGuide from "./Components/styleGuide";
import Signin from "./Components/signin";
import Profile from "./Components/profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="style" element={<StyleGuide/>} />
          <Route path="signup" element={<SignUpForm/>} />
          <Route path="login" element={<Signin/>} />
          <Route path="profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    // test commit
  );
}

export default App;
