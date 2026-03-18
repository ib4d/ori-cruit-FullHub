import { Tag } from "../../components/ui/Tag"
import { Button } from "../../components/ui/Button"

export default function DocumentsReview() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-8 h-screen font-ui overflow-hidden">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-line-hair pb-6 shrink-0">
        <div>
          <h1 className="font-display text-h1 uppercase tracking-tight mb-2">DOCUMENTS REVIEW</h1>
          <p className="text-ui-lg text-ink-muted">LEGAL VERIFICATION QUEUE</p>
        </div>
        <div className="flex gap-4">
          <Tag variant="status" status="warning" className="self-center px-4 py-2">6 REQUIRE MANUAL REVIEW</Tag>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
        
        {/* LEFT: Queue Table */}
        <div className="w-full lg:w-[45%] flex flex-col h-full bg-bg-panel border border-line-hair overflow-hidden">
          <div className="bg-surface-black text-ink-inverse p-4 shrink-0 shadow-floating">
             <span className="font-tech text-ui-sm font-bold tracking-widest uppercase">PENDING QUEUE</span>
          </div>
          <div className="overflow-y-auto flex-1">
            <table className="w-full text-left">
              <tbody className="text-ui-sm divide-y divide-line-hair">
                {[1,2,3,4,5,6].map(i => (
                  <tr key={i} className={`hover:bg-bg-paper transition-colors cursor-pointer ${i === 1 ? 'bg-bg-paper border-l-4 border-l-ink-primary' : 'bg-bg-base'}`}>
                    <td className="p-4 w-12 font-tech text-ink-muted">{i}</td>
                    <td className="p-4">
                      <div className="font-bold">PASSPORT_SCAN_{i}.JPG</div>
                      <div className="font-tech text-ui-xs text-ink-secondary">CAN-00{i} (Ivan Smirnov)</div>
                    </td>
                    <td className="p-4 text-right">
                      <Tag variant="status" status={i < 3 ? "warning" : "info"}>
                        {i < 3 ? "LOW CONFIDENCE" : "UNREADABLE"}
                      </Tag>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* RIGHT: Active Review Workspace */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden h-full">
          
          {/* Document Preview */}
          <div className="flex-1 bg-white border border-line-strong relative flex items-center justify-center p-8 overflow-hidden group">
            {/* Fake document image */}
            <div className="w-full max-w-[400px] aspect-[1/1.4] bg-bg-panel border border-line-hair shadow-floating relative">
               <div className="absolute top-8 left-8 w-24 h-24 bg-ink-muted opacity-20" />
               <div className="absolute top-10 left-36 w-40 h-4 bg-ink-muted opacity-20" />
               <div className="absolute top-20 left-36 w-32 h-4 bg-ink-muted opacity-20" />
               <div className="absolute top-40 left-8 right-8 h-32 bg-ink-muted opacity-20" />
               
               {/* OCR Target Box */}
               <div className="absolute top-10 left-36 w-40 h-10 border-2 border-accent-lime z-10 hidden group-hover:block pointer-events-none" />
            </div>
            {/* Overlay grid lines */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q4RDFDQSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aDEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-multiply pointer-events-none" />
          </div>
          
          {/* Extraction & Overrides */}
          <div className="h-[280px] shrink-0 border border-line-hair bg-bg-base p-6 flex flex-col relative">
             <h3 className="font-tech text-ui-meta uppercase text-ink-muted mb-4">CLASSIFICATION & FIELDS</h3>
             
             <div className="grid grid-cols-2 gap-8">
               <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-center border-b border-line-hair pb-2">
                   <span className="font-tech text-ui-xs">TYPE DETECTED</span>
                   <span className="font-bold">PASSPORT (PL)</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-line-hair pb-2">
                   <span className="font-tech text-ui-xs">CONFIDENCE</span>
                   <span className="font-bold text-state-warning flex items-center gap-2">
                     <span className="w-2 h-2 bg-state-warning rounded-full inline-block" /> 74%
                   </span>
                 </div>
               </div>
               
               <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-center border-b border-line-hair pb-2 group">
                   <span className="font-tech text-ui-xs">DOC_NUMBER</span>
                   <div className="flex items-center gap-2">
                     <span className="font-bold border-b border-dashed border-state-error text-state-error">AB12?45?</span>
                     <button className="opacity-0 group-hover:opacity-100 font-tech text-[10px] bg-ink-primary text-ink-inverse px-1">EDIT</button>
                   </div>
                 </div>
                 <div className="flex justify-between items-center border-b border-line-hair pb-2 group">
                   <span className="font-tech text-ui-xs">EXPIRY_DATE</span>
                   <div className="flex items-center gap-2">
                     <span className="font-bold">2030-10-15</span>
                     <button className="opacity-0 group-hover:opacity-100 font-tech text-[10px] bg-ink-primary text-ink-inverse px-1">EDIT</button>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="flex justify-between items-center mt-auto border-t border-line-hair pt-4">
               <Button variant="outline" className="text-state-error border-state-error border">MARK INVALID</Button>
               <Button variant="primary">APPROVE & EXTRACT</Button>
             </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
