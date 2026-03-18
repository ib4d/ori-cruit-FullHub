import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"

export default function ImporterLayout() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col font-ui text-ink-primary">
      {/* Top Strip */}
      <header className="flex h-12 items-center justify-between border-b border-line-hair bg-bg-panel px-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-h4 tracking-tighter">IMPORTER</span>
          <div className="w-px h-4 bg-line-hair" />
          <span className="font-tech text-ui-meta text-ink-muted">v1.0.0</span>
        </div>
      </header>
      
      {/* Importer Workspace Canvas */}
      <main className="flex-1 h-[calc(100vh-48px)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}
