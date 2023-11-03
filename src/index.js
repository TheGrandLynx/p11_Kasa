import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/'
import Header from './components/Header'

import './styles/main.css'
// On ajoute nos composants
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Error404 from './components/Error404'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}>
          {/* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
