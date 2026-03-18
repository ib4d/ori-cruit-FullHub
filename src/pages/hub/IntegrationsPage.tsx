import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { Tag } from "../../components/ui/Tag"

export default function IntegrationsPage() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-12 font-ui">
      
      <header className="flex flex-col md:flex-row justify-between md:items-end border-b border-line-hair pb-6 shrink-0">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">INTEGRATIONS</h1>
          <p className="text-ui-lg text-ink-muted">EXTERNAL SYSTEM SYNC & EXPORT</p>
        </div>
        <Button variant="outline" className="h-10 text-ui-xs font-bold shrink-0 mt-4 md:mt-0 uppercase">
          MANAGE CONNECTIONS
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* HRappka Panel */}
        <Card variant="paper" className="p-0 overflow-hidden flex flex-col border border-line-strong h-full">
          <div className="p-8 border-b border-line-hair bg-bg-panel/50 flex justify-between items-start">
            <div>
               <h2 className="font-display text-h3 uppercase tracking-widest text-ink-primary mb-1">HRAPPKA</h2>
               <p className="font-tech text-ui-xs text-ink-muted uppercase">Core ATS Sync Engine</p>
            </div>
            <Tag variant="status" status="success">CONNECTED</Tag>
          </div>
          
          <div className="p-8 flex flex-col gap-8 bg-bg-base flex-1">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">LAST SYNC</span>
                  <span className="text-ui-md font-bold text-ink-primary">10:45 AM (Today)</span>
               </div>
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">SYNC VOLUME</span>
                  <span className="text-ui-md font-bold text-ink-primary">1,245 Records</span>
               </div>
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">SCHEMA MAP</span>
                  <span className="text-ui-md font-bold text-accent-lime underline cursor-pointer">ORI_WA_TO_HR_v2</span>
               </div>
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">API STATUS</span>
                  <span className="text-ui-md font-bold text-ink-primary">ONLINE [98ms]</span>
               </div>
            </div>
            
            <div className="border border-line-hair bg-white p-6 mt-auto">
               <h3 className="font-tech text-ui-xs uppercase font-bold text-ink-primary border-b border-line-hair pb-2 mb-4">MANUAL PUSH</h3>
               <div className="flex gap-4">
                  <Button variant="primary" className="flex-1">SYNC PENDING CANDIDATES</Button>
               </div>
            </div>
          </div>
        </Card>

        {/* Google Sheets Panel */}
        <Card variant="black" className="p-0 overflow-hidden flex flex-col shadow-floating border border-line-hair h-full relative">
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] grad-atmosphere-b border-r border-line-hair pointer-events-none" />
          
          <div className="p-8 border-b border-ink-secondary flex justify-between items-start z-10">
            <div>
               <h2 className="font-display text-h3 uppercase tracking-widest text-ink-inverse mb-1">G-SHEETS</h2>
               <p className="font-tech text-ui-xs text-ink-muted uppercase line-clamp-1">Importer Fallback Target</p>
            </div>
            <Tag variant="status" className="bg-ink-primary text-accent-lime border-ink-secondary">ACTIVE</Tag>
          </div>
          
          <div className="p-8 flex flex-col gap-8 flex-1 z-10">
            <div className="grid grid-cols-2 gap-4 text-ink-inverse">
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">TARGET SHEET URL</span>
                  <span className="text-ui-sm font-bold text-accent-beige cursor-pointer truncate block">docs.google.com/...</span>
               </div>
               <div>
                  <span className="font-tech text-ui-meta text-ink-muted uppercase block mb-1">ROWS WRITTEN</span>
                  <span className="text-ui-md font-bold">4,192</span>
               </div>
            </div>

            <div className="border border-ink-secondary bg-surface-black p-6 mt-auto relative">
               <h3 className="font-tech text-ui-xs uppercase font-bold text-accent-lime border-b border-ink-secondary pb-2 mb-4">CONFIGURATION</h3>
               <div className="flex flex-col gap-4">
                 <Button variant="outline" className="border-ink-secondary text-ink-inverse hover:bg-ink-inverse hover:text-surface-black justify-between">
                    <span>CHANGE SPREADSHEET</span> <span>[→]</span>
                 </Button>
               </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  )
}
