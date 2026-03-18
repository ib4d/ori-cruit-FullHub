import { motion } from "framer-motion"
import { Card } from "../../components/ui/Card"
import { Tag } from "../../components/ui/Tag"

const DASHBOARD_METRICS = [
  { label: "Active Candidates", value: "842", trend: "+12%" },
  { label: "Legal Complete", value: "315", trend: "+4%" },
  { label: "Pending Imports", value: "28", trend: "" },
  { label: "Assignments Ready", value: "114", trend: "-2%" },
]

export default function HubDashboard() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-16">
      <header className="flex items-end justify-between border-b border-line-hair pb-8">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">OPERATIONAL HUB</h1>
          <p className="text-ui-lg text-ink-muted">RECRUITMENT TEAMS / OVERVIEW</p>
        </div>
        <div className="flex gap-4">
          <button className="h-10 px-4 bg-ink-primary text-ink-inverse text-ui-sm font-medium hover:bg-surface-black transition-colors">
            NEW EXPORT
          </button>
        </div>
      </header>

      {/* Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_METRICS.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card variant="black" className="flex flex-col gap-4">
              <span className="font-tech text-ui-meta uppercase text-ink-inverse opacity-60">
                {metric.label}
              </span>
              <div className="font-display text-display-metric">
                {metric.value}
              </div>
              {metric.trend && (
                <div className="text-ui-sm font-medium mt-auto text-accent-lime">
                  {metric.trend}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Pipeline & Recent Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex justify-between items-end border-b border-line-hair pb-4">
            <h2 className="font-display text-h2 uppercase">PIPELINE VOLUME</h2>
            <button className="text-ui-xs font-tech text-ink-secondary hover:text-ink-primary">
              VIEW BOARD [→]
            </button>
          </div>
          <Card className="min-h-[400px] flex items-end relative overflow-hidden bg-bg-paper p-0">
            {/* Simple abstract bar chart representing pipeline */}
            <div className="w-full h-full flex items-end gap-2 p-8">
              {[40, 70, 45, 90, 60, 30].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="flex-1 bg-ink-primary relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-accent-blush opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            {/* Soft background object */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] grad-atmosphere-b translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex justify-between items-end border-b border-line-hair pb-4">
            <h2 className="font-display text-h2 uppercase">LATEST IMPORTS</h2>
            <button className="text-ui-xs font-tech text-ink-secondary hover:text-ink-primary">
              REVIEW ALL [→]
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex justify-between items-center bg-bg-base border border-line-hair p-4 hover:border-line-strong transition-colors cursor-pointer group">
                <div className="flex flex-col gap-1">
                  <span className="font-tech text-ui-meta font-bold text-ink-primary">
                    IMP-00{item}-WHATSAPP
                  </span>
                  <span className="text-ui-xs text-ink-muted">
                    14 minutes ago
                  </span>
                </div>
                <Tag status="success" variant="status">PARSED</Tag>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Feed */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="font-display text-h2 uppercase border-b border-line-hair pb-4">RECRUITER ACTIVITY</h2>
        <div className="overflow-x-auto border border-line-hair bg-bg-panel">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-bg-soft border-b border-line-hair font-tech text-ui-xs text-ink-muted">
              <tr>
                <th className="p-4 font-normal">TIMESTAMP</th>
                <th className="p-4 font-normal">RECRUITER</th>
                <th className="p-4 font-normal">ACTION</th>
                <th className="p-4 font-normal">CANDIDATE</th>
                <th className="p-4 font-normal">STATUS</th>
              </tr>
            </thead>
            <tbody className="text-ui-sm divide-y divide-line-hair">
              {['10:41 AM', '10:38 AM', '10:22 AM', '09:55 AM'].map((time, i) => (
                <tr key={i} className="hover:bg-bg-paper transition-colors">
                  <td className="p-4 font-tech text-ui-xs text-ink-secondary">{time}</td>
                  <td className="p-4 font-medium uppercase tracking-wide">M. NOWAK</td>
                  <td className="p-4 text-ink-secondary">Moved stage to Interview</td>
                  <td className="p-4">Carlos Fernandez</td>
                  <td className="p-4">
                    <Tag status="info" variant="status">IN PROGRESS</Tag>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
