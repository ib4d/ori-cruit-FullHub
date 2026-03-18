import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/Button"

export default function ImporterReview() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full flex font-ui divide-x divide-line-hair">
      
      {/* LEFT: Metadata & Files (Col 1/3) */}
      <div className="w-[320px] xl:w-[400px] bg-bg-panel p-6 overflow-y-auto shrink-0 flex flex-col gap-8 h-full">
        <div>
          <h2 className="font-tech text-ui-xs text-ink-muted uppercase tracking-widest mb-4">IMPORT METADATA</h2>
          <div className="flex flex-col gap-2 border border-line-hair bg-bg-base p-4">
            <div className="flex justify-between font-tech text-ui-xs text-ink-primary border-b border-line-hair pb-2">
              <span className="opacity-60">JOB ID</span>
              <span className="font-bold">IMP-002-WA</span>
            </div>
            <div className="flex justify-between font-tech text-ui-xs text-ink-primary border-b border-line-hair pb-2">
              <span className="opacity-60">SOURCE</span>
              <span className="font-bold">chat_export.txt</span>
            </div>
            <div className="flex justify-between font-tech text-ui-xs text-ink-primary">
              <span className="opacity-60">LANG DETECTED</span>
              <span className="font-bold">ES (94%)</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-tech text-ui-xs text-ink-muted uppercase tracking-widest mb-4">MEDIA (4)</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map(i => (
              <div key={i} className="aspect-[3/4] bg-bg-soft border border-line-strong p-2 flex flex-col justify-end group">
                <div className="w-full h-full border border-line-hair bg-white mt-auto flex items-center justify-center relative overflow-hidden">
                  <span className="font-tech text-ui-xs text-ink-primary font-bold z-10">PASSPORT.JPG</span>
                  {/* Fake OCR scanline */}
                  <motion.div 
                    animate={{ y: ["-10%", "110%", "-10%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-2 bg-accent-lime opacity-40 blur-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-line-hair">
          <Button variant="ghost" className="w-full text-state-error border border-state-error uppercase"
            onClick={() => navigate('/importer')}
          >
            DISCARD JOB
          </Button>
        </div>
      </div>

      {/* CENTER: Reconstructed Chat (Col 2/3) */}
      <div className="flex-1 min-w-[500px] bg-bg-base p-8 lg:p-12 overflow-y-auto h-full flex flex-col">
        <h1 className="font-display text-h1 uppercase mb-8">RECONSTRUCTED CHAT</h1>
        
        <div className="flex flex-col gap-6 max-w-[800px] w-full mx-auto pb-32">
          
          {/* Recruiter Message */}
          <div className="self-end max-w-[80%] flex flex-col gap-1 items-end">
            <span className="font-tech text-ui-meta text-ink-muted uppercase">SYSTEM / RECRUITER [10:14]</span>
            <div className="bg-ink-primary text-ink-inverse border border-ink-primary px-6 py-4 text-ui-md shadow-floating">
              Hola, soy Carlos de Folga. Has aplicado a nuestra oferta. ¿Me puedes mandar foto de tu pasaporte?
            </div>
          </div>

          {/* Candidate Message */}
          <div className="self-start max-w-[80%] flex flex-col gap-1 items-start">
            <span className="font-tech text-ui-meta text-ink-muted uppercase">CANDIDATE [10:18]</span>
            <div className="bg-bg-paper border border-line-strong px-6 py-4 text-ui-md shadow-floating">
              Hola Carlos, sí claro, momento.
            </div>
          </div>

          {/* Candidate Media */}
          <div className="self-start max-w-[80%] flex flex-col gap-1 items-start mt-2">
            <div className="bg-bg-soft border border-line-strong p-4 flex gap-4 pr-16 shadow-floating relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-state-success flex items-center justify-center font-tech text-ui-xs text-ink-primary font-bold">✓</div>
              <div className="w-16 h-20 bg-bg-base border border-line-hair flex items-center justify-center font-display text-h4">JPG</div>
              <div className="flex flex-col justify-center gap-1">
                <span className="font-bold text-ui-sm uppercase">IMG-2023-WA001.JPG</span>
                <span className="font-tech text-ui-xs text-state-success font-bold">OCR: PASSPORT EXTRACTED</span>
              </div>
            </div>
          </div>

          {/* Recruiter Translation Feature */}
          <div className="self-end max-w-[80%] flex flex-col gap-1 items-end mt-4">
            <span className="font-tech text-ui-meta text-ink-muted uppercase">SYSTEM / RECRUITER [10:25]</span>
            <div className="bg-ink-primary text-ink-inverse border border-ink-primary px-6 py-4 text-ui-md shadow-floating relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent-lime text-ink-primary font-tech text-ui-xs flex items-center justify-center border border-ink-primary">T</div>
              Perfecto, los datos en el sistema están OK. ¿Tienes lugar donde quedarte?
            </div>
          </div>

          {/* Candidate Text */}
          <div className="self-start max-w-[80%] flex flex-col gap-1 items-start mt-2">
            <span className="font-tech text-ui-meta text-ink-muted uppercase">CANDIDATE [10:29]</span>
            <div className="bg-bg-paper border border-line-strong px-6 py-4 text-ui-md shadow-floating">
              Sí, ya tengo apartamento en Wroclaw.
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Extraction & Export Action (Col 3/3) */}
      <div className="w-[380px] xl:w-[480px] bg-bg-panel p-8 overflow-y-auto shrink-0 flex flex-col gap-10 h-full relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] grad-atmosphere-b border-r border-line-hair pointer-events-none" />
        
        <div className="z-10 bg-surface-black text-ink-inverse p-6 shadow-floating">
          <h2 className="font-display text-h3 uppercase text-accent-lime tracking-widest mb-4">EXTRACTION COMPLETE</h2>
          <p className="text-ui-sm opacity-80 border-b border-ink-secondary pb-4">
            System has reconstructed candidate profile from WhatsApp history and parsed documents with 94% overall confidence.
          </p>
          <div className="flex justify-between items-center pt-4">
            <span className="font-tech text-ui-xs uppercase">ACTION REQUIRED</span>
            <Button variant="secondary" className="bg-accent-lime text-surface-black hover:bg-ink-inverse hover:text-surface-black px-4 py-1 h-8 text-ui-xs font-bold">
              SYNC TO HUB
            </Button>
          </div>
        </div>

        <div className="z-10 flex flex-col gap-6">
          <h2 className="font-tech text-ui-xs text-ink-muted uppercase tracking-widest">EXTRACTED ENTITIES (9)</h2>
          
          <div className="flex flex-col border border-line-strong bg-bg-base divide-y divide-line-hair">
            <div className="flex justify-between p-4 group hover:bg-bg-paper transition-colors">
              <span className="font-tech text-ui-xs text-ink-secondary">FULL NAME</span>
              <span className="font-bold text-ink-primary text-ui-sm">Carlos Fernandez</span>
            </div>
            <div className="flex justify-between p-4 group hover:bg-bg-paper transition-colors">
              <span className="font-tech text-ui-xs text-ink-secondary">PHONE MATCH</span>
              <span className="font-bold text-ink-primary text-ui-sm">+34 600 123 456</span>
            </div>
            <div className="flex justify-between p-4 group hover:bg-bg-soft transition-colors bg-state-success relative overflow-hidden">
               {/* High confidence marker */}
              <div className="absolute top-0 left-0 w-1 h-full bg-ink-primary" />
              <span className="font-tech text-ui-xs text-ink-primary">LEGAL: PASSPORT</span>
              <span className="font-bold text-ink-primary text-ui-sm">VERIFIED (100%)</span>
            </div>
            <div className="flex justify-between p-4 group hover:bg-state-warning transition-colors bg-bg-paper border-b border-line-strong cursor-pointer border-l-4 border-l-state-warning">
              <span className="font-tech text-ui-xs text-ink-primary font-bold line-through">PERMIT (MISSING)</span>
              <span className="text-ui-xs font-bold uppercase text-state-warning bg-surface-black px-2 py-1">FIX</span>
            </div>
            <div className="flex justify-between p-4 group hover:bg-bg-paper transition-colors">
              <span className="font-tech text-ui-xs text-ink-secondary">LOCATION</span>
              <span className="font-bold text-ink-primary text-ui-sm">Wroclaw (Self-stated)</span>
            </div>
          </div>
        </div>

        <div className="z-10 mt-auto pt-8">
          <h2 className="font-tech text-ui-xs text-ink-muted uppercase tracking-widest mb-4">SUGGESTED AUTOMATION</h2>
          <Button variant="outline" className="w-full justify-between items-center group bg-bg-paper">
             <span>SEND MSG: DOC REQ</span>
             <span className="font-tech opacity-40 group-hover:opacity-100 transition-opacity">[TPL-01-ES]</span>
          </Button>
        </div>

      </div>

    </div>
  )
}
