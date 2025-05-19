import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './NavigationBar/Navbar';
import Sing_in from './UserLogin/sing_in';
import Sing_up from './UserLogin/sing_up';
import Home from './Home/HomePage';
import Contact from './contactUS/contact';
import About from './About/about';
import Order from './Order/order';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/singIn" element={<Sing_up/>} />
      <Route path="/singUp" element={<Sing_in/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contactUs" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;