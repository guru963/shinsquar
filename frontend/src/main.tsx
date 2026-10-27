import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegularShops from './pages/RegularShops.tsx'
import ExperienceBased from './pages/ExperienceBased.tsx'
import HouseholdWorks from './pages/HouseholdWorks.tsx'
import ComingSoon from './pages/ComingSoon.tsx'
import ShopDetails from './pages/RegularshopDetails.tsx'
import WorkerDetails from './pages/WorkerDetails.tsx'
import ResetPassword from './pages/ResetPassword.tsx'
import NotFound from './pages/NotFound.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import DeleteAccount from './pages/DeleteAccount.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/regular-shops" element={<RegularShops />} />
      <Route path="/experience-based" element={<ExperienceBased />} />
      <Route path="/household-works" element={<HouseholdWorks />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/regular-shops/:id" element={<ShopDetails />} />
      <Route path="/household-workers/:id" element={<WorkerDetails />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy/locall-app" element={<PrivacyPolicy defaultTab="locall-app" />} />
      <Route path="/privacy-policy/partner" element={<PrivacyPolicy defaultTab="partner" />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/delete-account/locall-app" element={<DeleteAccount defaultTab="locall-app" />} />
      <Route path="/delete-account/partner" element={<DeleteAccount defaultTab="partner" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
