import { motion } from "framer-motion"
import { Card } from "../../components/ui/Card"
import { Tag } from "../../components/ui/Tag"

const STAGES = [
  { id: "INITIAL", title: "INITIAL CONTACT", count: 12 },
  { id: "DOC_REQ", title: "DOCS REQUESTED", count: 8 },
  { id: "REVIEW", title: "LEGAL REVIEW", count: 5 },
  { id: "READY", title: "ASSIGNMENT READY", count: 14 },
]

const CARDS = [
  { id: "C1", stage: "INITIAL", name: "Tariq Mahmood", role: "Welder", recruiter: "J. KOWALSKI", legal: "MISSING" },
  { id: "C2", stage: "INITIAL", name: "Ivan Smirnov", role: "Welder", recruiter: "M. NOWAK", legal: "PENDING" },
  { id: "C3", stage: "DOC_REQ", name: "Oleg Petrov", role: "Packer", recruiter: "A. SMITH", legal: "MISSING" },
  { id: "C4", stage: "REVIEW", name: "Ali Yilmaz", role: "Driver", recruiter: "M. NOWAK", legal: "PARTIAL" },
  { id: "C5", stage: "READY", name: "Maria Gonzalez", role: "Packer", recruiter: "J. KOWALSKI", legal: "COMPLETE" },
  { id: "C6", stage: "READY", name: "Oksana Ivanova", role: "Assembly", recruiter: "A. SMITH", legal: "COMPLETE" },
]

export default function PipelineBoard() {
  return (
    <div className="p-8 lg:p-12 w-full h-screen overflow-hidden flex flex-col gap-8 bg-bg-base font-ui">
      
      {/* Header */}
      <header className="flex items-end justify-between border-b border-line-hair pb-6 shrink-0">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">PIPELINE</h1>
          <p className="text-ui-lg text-ink-muted">CANDIDATE STAGE TRACKING</p>
        </div>
        <div className="flex gap-4">
          <button className="h-[44px] px-6 border border-ink-primary hover:bg-bg-soft font-medium uppercase text-ui-sm tracking-wider">
            FILTER BOARD
          </button>
        </div>
      </header>

      {/* Board Columns */}
      <div className="flex-1 flex gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {STAGES.map((stage) => {
          const stageCards = CARDS.filter(c => c.stage === stage.id)
          
          return (
            <div key={stage.id} className="w-[360px] flex-shrink-0 flex flex-col gap-4">
              
              {/* Column Header */}
              <div className="border border-line-strong bg-surface-black text-ink-inverse p-4 flex justify-between items-center shadow-floating">
                <h3 className="font-tech text-ui-sm font-bold tracking-widest uppercase">{stage.title}</h3>
                <span className="font-tech text-ui-xs bg-ink-inverse text-surface-black px-2 py-0.5">{stage.count}</span>
              </div>

              {/* Lane / Cards Container */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-3 min-h-[200px] border-x border-b border-line-hair bg-bg-panel/50 p-3">
                {stageCards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    layoutId={card.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card variant="paper" className="p-4 cursor-grab hover:border-line-strong hover:bg-white transition-colors group">
                      
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-tech text-ui-meta text-ink-muted">{card.id}</div>
                        <Tag 
                          status={card.legal === "COMPLETE" ? "success" : card.legal === "MISSING" ? "error" : "warning"}
                          variant="status"
                        >
                          {card.legal}
                        </Tag>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-ui-md text-ink-primary -mb-1">{card.name}</h4>
                        <span className="text-ui-xs text-ink-secondary uppercase tracking-wide">{card.role}</span>
                      </div>
                      
                      <div className="border-t border-line-hair pt-3 flex justify-between items-end mt-auto">
                        <div className="font-tech text-ui-xs font-medium text-ink-primary">
                          <span className="text-ink-muted block text-[10px] mb-0.5">OWNER</span>
                          {card.recruiter}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-bg-soft border border-line-hair flex justify-center items-center text-ui-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          [↑]
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}
