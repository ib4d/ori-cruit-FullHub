import { Routes, Route } from "react-router-dom"
import HubLayout from "./layouts/HubLayout"
import ImporterLayout from "./layouts/ImporterLayout"

import MarketingLanding from "./pages/MarketingLanding"

import HubDashboard from "./pages/hub/Dashboard"
import CandidatesList from "./pages/hub/CandidatesList"
import CandidateDetail from "./pages/hub/CandidateDetail"
import PipelineBoard from "./pages/hub/PipelineBoard"
import DocumentsReview from "./pages/hub/DocumentsReview"
import TemplatesCenter from "./pages/hub/TemplatesCenter"
import IntegrationsPage from "./pages/hub/IntegrationsPage"

import ImporterHome from "./pages/importer/Home"
import ImporterProcessing from "./pages/importer/Processing"
import ImporterReview from "./pages/importer/Review"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingLanding />} />
      
      {/* ORI-CRUIT HUB */}
      <Route path="/hub" element={<HubLayout />}>
        <Route index element={<HubDashboard />} />
        <Route path="candidates" element={<CandidatesList />} />
        <Route path="candidates/:id" element={<CandidateDetail />} />
        <Route path="documents" element={<DocumentsReview />} />
        <Route path="templates" element={<TemplatesCenter />} />
        <Route path="pipeline" element={<PipelineBoard />} />
        <Route path="integrations" element={<IntegrationsPage />} />
      </Route>

      {/* ORI-CRUIT WHATSAPP IMPORTER */}
      <Route path="/importer" element={<ImporterLayout />}>
        <Route index element={<ImporterHome />} />
        <Route path="processing" element={<ImporterProcessing />} />
        <Route path="review" element={<ImporterReview />} />
      </Route>
    </Routes>
  )
}

export default App
