import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const STAGES = [
  "READING ARCHIVE...",
  "EXTRACTING MEDIA...",
  "RUNNING OCR ENGINE...",
  "CLASSIFYING DOCUMENTS...",
  "EXTRACTING ENTITIES...",
  "ASSEMBLING PROFILE..."
]

export default function ImporterProcessing() {
  const navigate = useNavigate()
  const [stageIndex, setStageIndex] = useState(0)

  useEffect(() => {
    // Simulate processing steps
    if (stageIndex < STAGES.length - 1) {
      const timer = setTimeout(() => {
        setStageIndex(prev => prev + 1)
      }, 800 + Math.random() * 1000)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        navigate('/importer/review')
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [stageIndex, navigate])

  const progress = ((stageIndex + 1) / STAGES.length) * 100

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-bg-base relative overflow-hidden font-ui">
      
      {/* Decorative spinning elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="w-[800px] h-[800px] border border-line-hair absolute mix-blend-multiply opacity-30 top-1/2 left-1/2 -mt-[400px] -ml-[400px]"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-[600px] h-[600px] border border-line-hair absolute mix-blend-multiply opacity-20 top-1/2 left-1/2 -mt-[300px] -ml-[300px] border-dashed"
      />

      <div className="z-10 flex flex-col gap-12 items-center text-center max-w-[800px] w-full px-8">
        
        <div className="flex flex-col gap-4">
          <motion.div
            key={stageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="font-display text-display-block uppercase tracking-tight text-ink-primary">
              {STAGES[stageIndex]}
            </h1>
          </motion.div>
          
          <div className="flex gap-4 items-center justify-center font-tech text-ui-meta uppercase text-ink-muted">
            <span className="w-4 h-4 rounded-full bg-accent-lime animate-pulse block" />
            <span>Parsing WhatsApp Chat v2</span>
            <span>|</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-bg-panel border border-line-hair relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="absolute top-0 left-0 h-full bg-ink-primary"
          />
        </div>

        {/* Log Viewer Simulation */}
        <div className="w-full h-[200px] bg-surface-black border border-line-strong p-6 overflow-hidden relative text-left">
          <div className="absolute top-0 right-0 p-2 font-tech text-ui-xs text-ink-muted leading-none">
            [SYS_LOG]
          </div>
          <div className="flex flex-col gap-2 font-tech text-ui-xs text-ink-inverse font-medium opacity-80 mt-4">
            {STAGES.slice(0, stageIndex + 1).map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4"
              >
                <span className="text-accent-rose">[{new Date().toISOString().substring(11, 23)}]</span>
                <span>{s} OK.</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
