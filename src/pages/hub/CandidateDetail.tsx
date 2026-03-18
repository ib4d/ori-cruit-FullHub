import { useParams, Link } from "react-router-dom"
import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { Tag } from "../../components/ui/Tag"

export default function CandidateDetail() {
  const { id } = useParams()

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-12 font-ui">
      {/* Top Breadcrumb/Nav */}
      <nav className="font-tech text-ui-meta uppercase text-ink-muted tracking-widest flex items-center gap-2">
        <Link to="/hub/candidates" className="hover:text-ink-primary">CANDIDATES</Link>
        <span>/</span>
        <span className="text-ink-primary font-bold">{id || "CAN-002"}</span>
      </nav>

      {/* Main Grid: 3 Column Editorial Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Identity Block */}
        <div className="lg:col-span-3 flex flex-col gap-8 sticky top-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-h1 uppercase tracking-tighter leading-none mb-2">MARIA GONZALEZ</h1>
            <Tag variant="status" status="success" className="self-start text-ui-sm">ASSIGNMENT READY</Tag>
            
            <div className="h-px bg-line-strong w-full my-4" />
            
            <div className="grid grid-cols-2 gap-y-4 font-tech text-ui-xs">
              <span className="text-ink-muted">RECRUITER</span>
              <span className="font-bold text-ink-primary justify-self-end">J. KOWALSKI</span>
              
              <span className="text-ink-muted">SOURCE</span>
              <span className="font-bold text-ink-primary justify-self-end text-right">WHATSAPP-IMP-042</span>
              
              <span className="text-ink-muted">ADDED</span>
              <span className="font-bold text-ink-primary justify-self-end text-right">24 OCT 2026</span>
            </div>
            
            <div className="h-px bg-line-hair w-full my-4" />
            
            <div className="flex flex-col gap-3">
              <Button className="w-full justify-between" variant="primary">
                <span>CHANGE STAGE</span> <span>[→]</span>
              </Button>
              <Button className="w-full justify-between" variant="outline">
                <span>NEW TEMPLATE MSG</span> <span>[T]</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Center: Metadata & Timeline */}
        <div className="lg:col-span-6 flex flex-col gap-16 border-l border-line-hair lg:pl-8">
          <section>
            <h2 className="font-tech text-ui-xs uppercase tracking-widest text-ink-muted mb-6 flex items-center gap-4">
              <span>EXTRACTED FIELDS</span>
              <div className="flex-1 h-px bg-line-hair" />
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border border-line-hair p-8 bg-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 grad-atmosphere-a pointer-events-none" />
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">PRIMARY PHONE</span>
                <span className="text-ui-md font-medium">+48 555 123 456</span>
              </div>
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">EMAIL</span>
                <span className="text-ui-md font-medium">maria.g@example.com</span>
              </div>
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">NATIONALITY</span>
                <span className="text-ui-md font-medium">Colombia</span>
              </div>
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">LANGUAGES</span>
                <span className="text-ui-md font-medium">Spanish, Basic English</span>
              </div>
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">TARGET ROLE</span>
                <span className="text-ui-md font-medium">Warehouse / Packing</span>
              </div>
              <div className="flex flex-col gap-1 z-10 block">
                <span className="font-tech text-ui-meta text-ink-muted">LOCATION PREF</span>
                <span className="text-ui-md font-medium">Wrocław Area</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-tech text-ui-xs uppercase tracking-widest text-ink-muted mb-6 flex items-center gap-4">
              <span>ACTIVITY TIMELINE</span>
              <div className="flex-1 h-px bg-line-hair" />
            </h2>
            
            <div className="flex flex-col relative pl-4 border-l border-line-strong ml-2 space-y-8">
              <div className="relative">
                <div className="absolute w-2 h-2 bg-ink-primary -left-[21px] top-1.5" />
                <span className="font-tech text-ui-meta text-ink-muted block mb-1">TODAY, 10:41 AM</span>
                <p className="text-ui-md font-medium">Stage updated to ASSIGNMENT READY.</p>
                <p className="text-ui-xs text-ink-secondary mt-1">Action preformed by J. KOWALSKI</p>
              </div>
              <div className="relative">
                <div className="absolute w-2 h-2 bg-bg-base border border-line-strong -left-[21px] top-1.5" />
                <span className="font-tech text-ui-meta text-ink-muted block mb-1">YESTERDAY, 14:22 PM</span>
                <p className="text-ui-md font-medium">Legal review flagged COMPLETE.</p>
                <p className="text-ui-xs text-ink-secondary mt-1">Documents verified via OCR Integration.</p>
              </div>
              <div className="relative">
                <div className="absolute w-2 h-2 bg-bg-base border border-line-strong -left-[21px] top-1.5" />
                <span className="font-tech text-ui-meta text-ink-muted block mb-1">24 OCT, 09:15 AM</span>
                <p className="text-ui-md font-medium">Candidate imported from WhatsApp Archive.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Docs & Legal */}
        <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-8 lg:border-l border-line-hair">
          <Card variant="black" className="p-6">
            <h3 className="font-tech text-ui-meta text-ink-muted uppercase tracking-widest mb-4">LEGAL INSPECTION</h3>
            <div className="font-display text-h3 uppercase text-ink-inverse mb-6">ALL DOCUMENTS VERIFIED</div>
            <div className="flex flex-col gap-3 font-tech text-ui-sm border-t border-ink-secondary pt-4 text-ink-inverse">
              <div className="flex justify-between">
                <span className="opacity-70">PASSPORT</span>
                <span className="text-accent-lime">OK</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">PERMIT</span>
                <span className="text-accent-lime">OK</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">VISUAL CHECK</span>
                <span className="opacity-50">N/A</span>
              </div>
            </div>
          </Card>

          <div className="border border-line-hair p-6 bg-bg-soft flex flex-col gap-4 mt-4">
            <h3 className="font-tech text-ui-meta text-ink-primary font-bold uppercase tracking-widest">HRAPPKA EXPORT</h3>
            <p className="text-ui-sm text-ink-secondary">Record is 100% matched with HRappka schema.</p>
            <Button className="mt-2" variant="outline">PUSH TO HRAPPKA</Button>
          </div>
        </div>

      </div>
    </div>
  )
}
