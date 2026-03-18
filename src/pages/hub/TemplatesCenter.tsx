import { Card } from "../../components/ui/Card"
import { Tag } from "../../components/ui/Tag"

export default function TemplatesCenter() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-8 h-screen font-ui overflow-hidden">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-line-hair pb-6 shrink-0">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">TEMPLATES</h1>
          <p className="text-ui-lg text-ink-muted">MULTILINGUAL MESSAGE AUTOMATION</p>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
        
        {/* Nav list */}
        <div className="w-[300px] shrink-0 border border-line-hair bg-bg-panel flex flex-col h-full">
          <div className="p-4 border-b border-line-hair font-tech text-ui-xs uppercase tracking-widest text-ink-muted font-bold">
            CATEGORIES
          </div>
          <nav className="flex flex-col">
             {['Initial Outreach', 'Legal Docs Request', 'Follow-up', 'Missing Info', 'Assignment Ready', 'Rejection'].map((item, i) => (
                <button
                  key={item}
                  className={`px-6 py-4 text-left font-tech text-ui-sm uppercase flex justify-between items-center border-b border-line-hair transition-colors hover:bg-bg-paper ${i === 1 ? 'bg-bg-base border-l-4 border-l-ink-primary font-bold' : ''}`}
                >
                  {item}
                  <span className="text-ink-muted text-[10px]">{i === 1 ? '12 TPL' : '5 TPL'}</span>
                </button>
             ))}
          </nav>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
           <div className="flex gap-2 shrink-0">
             <Tag variant="filled" className="bg-ink-primary text-ink-inverse font-bold">ALL LANGUAGES</Tag>
             <Tag variant="outline" className="hover:bg-bg-soft cursor-pointer">PL (POLISH)</Tag>
             <Tag variant="outline" className="hover:bg-bg-soft cursor-pointer">EN (ENGLISH)</Tag>
             <Tag variant="outline" className="hover:bg-bg-soft cursor-pointer">ES (SPANISH)</Tag>
           </div>
           
           <div className="flex-1 overflow-y-auto grid grid-cols-1 xl:grid-cols-2 gap-6 pb-20">
              
              {/* Template Items */}
              {['ES', 'EN', 'PL'].map((lang) => (                <Card key={lang} variant="paper" className="p-0 flex flex-col justify-between">
                  {/* Top */}
                  <div className="p-6 border-b border-line-hair flex justify-between items-center bg-bg-base">
                    <span className="font-tech text-ui-xs font-bold uppercase tracking-widest text-ink-primary">
                      DOC_REQ_INITIAL_{lang}
                    </span>
                    <Tag variant="outline">{lang}</Tag>
                  </div>
                  {/* Body */}
                  <div className="p-6 text-ui-md text-ink-secondary leading-relaxed font-ui whitespace-pre-wrap flex-1 bg-white">
                    {lang === 'ES' && "Hola {{candidate.name}}, soy {{recruiter.name}} de Folga. ¿Me puedes enviar una foto de tu pasaporte por favor?"}
                    {lang === 'EN' && "Hello {{candidate.name}}, I'm {{recruiter.name}} from Folga. Could you please send a photo of your passport?"}
                    {lang === 'PL' && "Cześć {{candidate.name}}, jestem {{recruiter.name}} z Folga. Czy możesz przesłać zdjęcie swojego paszportu?"}
                  </div>
                  {/* Bottom Variables */}
                  <div className="p-4 bg-bg-panel border-t border-line-hair flex items-center justify-between">
                    <div className="flex gap-2">
                       <span className="font-tech text-[10px] bg-white border border-line-hair px-1 text-ink-muted">&#123;&#123;candidate.name&#125;&#125;</span>
                       <span className="font-tech text-[10px] bg-white border border-line-hair px-1 text-ink-muted">&#123;&#123;recruiter.name&#125;&#125;</span>
                    </div>
                    <button className="font-tech text-ui-xs font-bold hover:underline">EDIT [→]</button>
                  </div>
                </Card>
              ))}

           </div>
        </div>

      </div>
    </div>
  )
}
