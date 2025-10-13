import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EpisodiesPage from './Pages/EpisodiesPage/EpisodiesPage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'
import LocationPage from './Pages/LocationPage/LocationPage'
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
function App() {
  
  return (
    <Router>
      <Header />
    
      <div id='separador'>
        <NavBar/>
       <Routes>        
          <Route path='/episodios' element={<EpisodiesPage />} />
          <Route path='/personajes' element={<CharactersPage />} />
          <Route path='/localizacion' element={<LocationPage />} />
          <Route path="/personaje/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
            
      
      
      <Footer />
    </Router>
  )
}

export default App
