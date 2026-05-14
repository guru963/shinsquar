import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegularShops from "./pages/RegularShops.tsx";
import ExperienceBased from "./pages/ExperienceBased.tsx";
import HouseholdWorks from "./pages/HouseholdWorks.tsx";
import ShopDetails from './pages/RegularshopDetails.tsx'
import WorkerDetails from './pages/WorkerDetails.tsx'
import ComingSoon from './pages/ComingSoon.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path="/regular-shops" element={<ComingSoon />} />
    <Route path="/experience-based" element={<ComingSoon />} />
    <Route path="/household-works" element={<ComingSoon />} />
    <Route path="/regular-shops/:id" element={<ComingSoon />} />
    <Route path="/household-workers/:id" element={<ComingSoon />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
)
