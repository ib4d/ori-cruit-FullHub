import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Input } from "../../components/ui/Input"
import { Tag } from "../../components/ui/Tag"

const CANDIDATES = [
  { id: "CAN-001", name: "Ivan Smirnov", role: "Welder", recruiter: "M. NOWAK", stage: "INITIAL", legal: "PENDING", docs: 2 },
  { id: "CAN-002", name: "Maria Gonzalez", role: "Packer", recruiter: "J. KOWALSKI", stage: "READY", legal: "COMPLETE", docs: 5 },
  { id: "CAN-003", name: "Ali Yilmaz", role: "Driver", recruiter: "M. NOWAK", stage: "REVIEW", legal: "PARTIAL", docs: 3 },
  { id: "CAN-004", name: "Oksana Ivanova", role: "Assembly", recruiter: "A. SMITH", stage: "ASSIGNED", legal: "COMPLETE", docs: 4 },
  { id: "CAN-005", name: "Tariq Mahmood", role: "Welder", recruiter: "J. KOWALSKI", stage: "INITIAL", legal: "MISSING", docs: 0 },
]

export default function CandidatesList() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-12 h-screen overflow-hidden">
      
      {/* Header */}
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-line-hair pb-6 shrink-0">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">CANDIDATES</h1>
          <p className="text-ui-lg text-ink-muted">TOTAL RECORDS: 842</p>
        </div>
        <div className="flex gap-4">
          <Input placeholder="Search candidates..." className="w-[300px]" />
          <button className="h-[44px] px-6 border border-ink-primary hover:bg-bg-soft font-medium uppercase text-ui-sm tracking-wider">
            FILTER
          </button>
          <button className="h-[44px] px-6 bg-ink-primary text-ink-inverse font-medium hover:bg-surface-black uppercase text-ui-sm tracking-wider">
            ADD NEW
          </button>
        </div>
      </header>

      {/* Main Table Area */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 overflow-auto border border-line-hair bg-bg-panel"
      >
        <table className="w-full text-left min-w-[1000px]">
          <thead className="bg-bg-soft border-b border-line-hair sticky top-0 z-10">
            <tr className="font-tech text-ui-xs text-ink-muted">
              <th className="p-4 min-w-[60px] font-normal border-r border-line-hair">SEL</th>
              <th className="p-4 font-normal">CANDIDATE ID</th>
              <th className="p-4 font-normal">NAME & ROLE</th>
              <th className="p-4 font-normal">RECRUITER</th>
              <th className="p-4 font-normal">STAGE</th>
              <th className="p-4 font-normal">LEGAL STATUS</th>
              <th className="p-4 font-normal">DOCS</th>
              <th className="p-4 font-normal text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-ui-sm divide-y divide-line-hair bg-bg-base">
            {CANDIDATES.map((c) => (
              <tr key={c.id} className="hover:bg-bg-soft transition-colors group">
                <td className="p-4 border-r border-line-hair">
                  <div className="w-4 h-4 border border-line-strong bg-white mx-auto cursor-pointer" />
                </td>
                <td className="p-4 font-tech text-ui-xs text-ink-secondary">{c.id}</td>
                <td className="p-4">
                  <Link to={`/hub/candidates/${c.id}`} className="font-bold hover:underline block text-[16px]">
                    {c.name}
                  </Link>
                  <span className="text-ui-xs text-ink-muted uppercase">{c.role}</span>
                </td>
                <td className="p-4 font-tech text-ui-xs tracking-wider font-semibold">{c.recruiter}</td>
                <td className="p-4">
                  <Tag variant="outline">{c.stage}</Tag>
                </td>
                <td className="p-4">
                  <Tag 
                    variant="status" 
                    status={c.legal === "COMPLETE" ? "success" : c.legal === "MISSING" ? "error" : "warning"}
                  >
                    {c.legal}
                  </Tag>
                </td>
                <td className="p-4 font-tech text-ink-secondary">{c.docs}/5</td>
                <td className="p-4 text-right">
                  <button className="opacity-0 group-hover:opacity-100 uppercase text-ui-xs font-bold hover:text-accent-rose transition-opacity">
                    QUICK EDIT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
