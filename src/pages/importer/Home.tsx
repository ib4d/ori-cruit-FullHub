import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function ImporterHome() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full flex flex-col overflow-hidden relative">
      {/* Importer-specific hard gradient background */}
      <div className="absolute inset-0 bg-bg-base overflow-hidden flex justify-center items-center pointer-events-none">
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[120vw] h-[120vw] border border-line-soft rounded-full absolute opacity-20"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="w-[80vw] h-[80vw] border border-line-soft rounded-full absolute opacity-20 border-dashed"
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] grad-atmosphere-a" />
      </div>

      <div className="relative z-10 flex flex-1 w-full max-w-[1400px] mx-auto p-12 lg:p-24 h-full items-center">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="flex flex-col gap-8">
            <motion.h1 
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-display-block uppercase leading-[0.9] tracking-tighter"
            >
              DROP ARCHIVES.<br />
              EXTRACT TRUTH.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-6 py-4 border-l-2 border-ink-primary bg-bg-soft/80 backdrop-blur-sm max-w-[420px]"
            >
              <p className="text-ui-md text-ink-secondary">
                This engine transforms messy WhatsApp .txt exports and unstructured media into clean, API-ready HR profiles.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-tech text-ui-xs text-ink-muted uppercase tracking-widest flex flex-col gap-2"
            >
              <span>ACCEPTED FORMATS:</span>
              <div className="flex gap-4">
                <span className="border border-line-hair px-2 py-1 bg-white">.TXT (WHATSAPP)</span>
                <span className="border border-line-hair px-2 py-1 bg-white">.PDF</span>
                <span className="border border-line-hair px-2 py-1 bg-white">.JPG / .PNG</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-full aspect-[4/3] bg-surface-black border border-ink-primary relative flex items-center justify-center cursor-pointer group hover:bg-ink-secondary transition-colors"
            onClick={() => navigate('/importer/processing')}
          >
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-ink-inverse opacity-50" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-ink-inverse opacity-50" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-ink-inverse opacity-50" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-ink-inverse opacity-50" />

            <div className="flex flex-col items-center gap-6 z-10 text-center pointer-events-none">
              <div className="w-16 h-16 border-2 border-ink-inverse flex items-center justify-center transform group-hover:scale-110 transition-transform duration-slow">
                <div className="w-8 h-8 bg-ink-inverse" />
              </div>
              <div>
                <span className="font-display text-h3 text-ink-inverse block uppercase">INITIALIZE IMPORT</span>
                <span className="font-tech text-ui-xs text-accent-beige opacity-50 block mt-2">CLICK OR DRAG FILES HERE</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-tech text-ui-xs text-ink-inverse opacity-30 select-none">
              SYSTEM IS READY
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
