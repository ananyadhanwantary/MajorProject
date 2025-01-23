import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import FooterComponent from './Components/FooterComponent';
import SignUpComponent from './Components/SignUpComponent';
import LandingPageComponent from './Components/LandingPageComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<LandingPageComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/signup" element={<SignUpComponent/>}/>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
