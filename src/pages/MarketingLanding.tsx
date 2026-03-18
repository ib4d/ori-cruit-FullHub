import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"

export default function MarketingLanding() {
  return (
    <div className="min-h-screen bg-bg-base relative overflow-hidden font-ui">
      {/* Atmospheric Gradients */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] grad-atmosphere-a -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] grad-atmosphere-b translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex h-24 items-center justify-between px-8 lg:px-16">
        <div className="font-display text-h3 tracking-tighter">ORI-CRUIT.</div>
        <div className="flex items-center gap-4 border border-line-hair p-1">
          <Link to="/hub" className="px-4 py-2 hover:bg-bg-soft text-ui-sm font-medium transition-colors">
            Hub Login
          </Link>
          <Link to="/importer" className="px-4 py-2 bg-ink-primary text-ink-inverse text-ui-sm font-medium hover:bg-surface-black transition-colors">
            Open Importer
          </Link>
        </div>
      </nav>

      <main className="relative z-10 px-8 lg:px-16 pt-20 lg:pt-32 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Hero Copy - Asymmetric Left */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <motion.h1 
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-hero uppercase text-ink-primary max-w-[900px]"
            >
              RECRUITMENT MEETS <br className="hidden md:block" /> CONTROL.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-8 max-w-[480px]"
            >
              <p className="text-ui-lg text-ink-secondary leading-relaxed">
                The operations hub for staffing teams. 
                Manage candidate pipelines, automate legal document verification, and extract structured data from WhatsApp intake instantly.
              </p>
              
              <div className="flex items-center gap-4">
                <Button className="h-16 px-8 text-ui-md font-semibold font-ui uppercase tracking-wide">
                  ENTER COMMAND HUB
                </Button>
                <div className="flex flex-col gap-1 ml-4 justify-center">
                  <span className="font-tech text-ui-xs text-ink-muted">VERSION</span>
                  <span className="font-tech text-ui-xs font-bold text-ink-primary">1.0.SYSTEM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Accents */}
          <div className="lg:col-span-4 lg:mt-16 relative">
            {/* Visual contrast abstract diagram */}
            <div className="w-full aspect-square border border-line-strong relative overflow-hidden bg-bg-soft">
              <div className="absolute inset-x-0 top-1/2 border-t border-line-hair" />
              <div className="absolute inset-y-0 left-1/2 border-l border-line-hair" />
              {/* Abstract decorative element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-primary border-dashed opacity-30"
              />
              <div className="absolute top-4 left-4 font-tech text-ui-xs uppercase border border-line-strong px-2 py-1 bg-white">
                FIG.01
              </div>
            </div>
          </div>
          
        </div>

        {/* Black Statement Slab Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-[1400px] mx-auto mt-24 bg-surface-black text-ink-inverse p-8 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-display-block uppercase mb-4">Pipeline Intelligence</h2>
            <p className="text-ui-lg opacity-80 max-w-[500px]">
              Replace scattered spreadsheets. Track candidates, monitor legal readiness, and enforce recruiter ownership in a single source of truth.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <Button variant="outline" className="border-ink-inverse text-ink-inverse hover:bg-ink-inverse hover:text-ink-primary self-start">
              Explore Architecture
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
