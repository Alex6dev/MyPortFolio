import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { MoiPage } from './pages/MoiPage';
import { CompetencesPage } from './pages/CompetencesPage';
import { PortFolioPage } from './pages/PortFolioPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  console.log("toto")

  return (
    
      <Routes>      
        <Route path='/' element={<HomePage/>}/>
        <Route path='/moi' element={<MoiPage/>}/>
        <Route path='/competences' element={<CompetencesPage/>}/>
        <Route path='/portfolio' element={<PortFolioPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>    
      </Routes>
    
  );
}

export default App;
