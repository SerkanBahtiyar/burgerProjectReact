
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Menu } from './components/Menu';

import { Contact } from './components/Contact';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Aboutt } from './components/Aboutt';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/menu' exact element={<Menu/>}/>
      <Route path='/aboutt' exact element={<Aboutt/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
