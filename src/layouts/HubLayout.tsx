import { Link, Outlet, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export default function HubLayout() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-bg-base flex flex-col font-ui text-ink-primary overflow-x-hidden">
      {/* Top Bar Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-line-hair bg-bg-base px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-h3 tracking-tight font-bold">
            ORI-CRUIT
          </Link>
          <nav className="flex items-center gap-6 text-ui-sm font-medium text-ink-secondary">
            <Link to="/hub" className="hover:text-ink-primary">Dashboard</Link>
            <Link to="/hub/candidates" className="hover:text-ink-primary">Candidates</Link>
            <Link to="/hub/documents" className="hover:text-ink-primary">Documents</Link>
            <Link to="/hub/templates" className="hover:text-ink-primary">Templates</Link>
            <Link to="/hub/pipeline" className="hover:text-ink-primary">Pipeline</Link>
            <Link to="/hub/integrations" className="hover:text-ink-primary">Integrations</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-ui-xs font-tech text-ink-muted hidden md:block">
            {new Date().toISOString().split('T')[0]} / OPS_LEAD
          </div>
          <button className="h-8 border border-line-hair px-3 text-ui-xs font-bold hover:bg-bg-soft uppercase">
            Search
          </button>
          <div className="h-8 w-8 bg-ink-primary flex items-center justify-center text-ink-inverse text-ui-xs font-bold font-tech cursor-pointer hover:bg-surface-black">
            A
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="h-full overflow-y-auto"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}
