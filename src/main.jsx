import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import NasionalPage from './pages/nasionalPage'
import InternasionalPage from './pages/internasionalPage'
import PolitikPage from './pages/politikPage'
import EkonomiPage from './pages/ekonomiPage'
import OlahragaPage from './pages/olahragaPage'
import OtomotifPage from './pages/otomotifPage'
import NotFoundPage from './pages/notFoundPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nasional' element={<NasionalPage />} />
        <Route path='/internasional' element={<InternasionalPage />} />
        <Route path='/politik' element={<PolitikPage />} />
        <Route path='/ekonomi' element={<EkonomiPage />} />
        <Route path='/olahraga' element={<OlahragaPage />} />
        <Route path='/otomotif' element={<OtomotifPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
