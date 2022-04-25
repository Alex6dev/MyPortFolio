import './App.css';
import { Route, Router, Routes } from 'react-router';
import { HomePages } from './pages/HomePage';
import { APropos } from './pages/APropos';
import { PortFolios } from './pages/PortFolio';
import { Contact } from './pages/Contact';

function App() {
  return (
    
      <Routes>      
        <Route path='/' element={<HomePages/>}/>
        <Route path='/' element={<APropos/>}/>
        <Route path='/' element={<PortFolios/>}/>
        <Route path='/' element={<Contact/>}/>    
      </Routes>
    
  );
}

export default App;
